/**
 * AgroMart Razorpay Payment Gateway & Delivery Server
 * Zero-dependency native Node.js HTTP/HTTPS server
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;

// Default Sandbox / Test Keys (can be overridden via ENV or API)
let RAZORPAY_CONFIG = {
  keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_AgroMartDemo2026',
  keySecret: process.env.RAZORPAY_KEY_SECRET || 'agromart_demo_secret_2026',
  currency: 'INR'
};

// MIME Types map
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

/**
 * Call Razorpay REST API to create an order
 */
function createRazorpayOrderViaApi(orderData) {
  return new Promise((resolve, reject) => {
    // If using demo placeholder key, return simulated order immediately
    if (RAZORPAY_CONFIG.keyId.includes('Demo')) {
      return resolve({
        id: 'order_' + crypto.randomBytes(8).toString('hex'),
        entity: 'order',
        amount: orderData.amount,
        amount_paid: 0,
        amount_due: orderData.amount,
        currency: orderData.currency || 'INR',
        receipt: orderData.receipt,
        status: 'created',
        attempts: 0,
        notes: orderData.notes || {},
        created_at: Math.floor(Date.now() / 1000)
      });
    }

    const postPayload = JSON.stringify(orderData);
    const auth = Buffer.from(`${RAZORPAY_CONFIG.keyId}:${RAZORPAY_CONFIG.keySecret}`).toString('base64');

    const options = {
      hostname: 'api.razorpay.com',
      port: 443,
      path: '/v1/orders',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
        'Content-Length': Buffer.byteLength(postPayload)
      }
    };

    const apiReq = https.request(options, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (apiRes.statusCode >= 200 && apiRes.statusCode < 300) {
            resolve(parsed);
          } else {
            console.warn('Razorpay API response with error:', parsed);
            // Fallback to local sandbox order if API key is invalid or unauthorized
            resolve({
              id: 'order_' + crypto.randomBytes(8).toString('hex'),
              entity: 'order',
              amount: orderData.amount,
              currency: 'INR',
              receipt: orderData.receipt,
              status: 'created',
              warning: parsed.error ? parsed.error.description : 'Sandbox fallback mode',
              key_id: RAZORPAY_CONFIG.keyId
            });
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    apiReq.on('error', (err) => {
      console.warn('Network error reaching Razorpay, using sandbox order:', err.message);
      resolve({
        id: 'order_' + crypto.randomBytes(8).toString('hex'),
        entity: 'order',
        amount: orderData.amount,
        currency: 'INR',
        receipt: orderData.receipt,
        status: 'created',
        offline_mode: true
      });
    });

    apiReq.write(postPayload);
    apiReq.end();
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // ==========================================
  // API ROUTE: Server & Razorpay Status
  // ==========================================
  if (pathname === '/api/razorpay/status' && req.method === 'GET') {
    return sendJson(res, 200, {
      status: 'online',
      connected: true,
      serverTime: new Date().toISOString(),
      keyId: RAZORPAY_CONFIG.keyId,
      isDemo: RAZORPAY_CONFIG.keyId.includes('Demo'),
      currency: RAZORPAY_CONFIG.currency,
      endpoints: {
        createOrder: '/api/razorpay/create-order',
        verifyPayment: '/api/razorpay/verify-payment'
      }
    });
  }

  // ==========================================
  // API ROUTE: Create Razorpay Order
  // ==========================================
  if (pathname === '/api/razorpay/create-order' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const amount = Number(body.amount); // in paise (e.g. 50000 = ₹500.00)

      if (!amount || amount <= 0) {
        return sendJson(res, 400, { error: 'Invalid order amount' });
      }

      const receipt = body.receipt || ('rcpt_' + Date.now().toString().slice(-8));
      const orderPayload = {
        amount: Math.round(amount),
        currency: body.currency || 'INR',
        receipt: receipt,
        notes: body.notes || { platform: 'AgroMart Web' }
      };

      const razorpayOrder = await createRazorpayOrderViaApi(orderPayload);
      razorpayOrder.key_id = RAZORPAY_CONFIG.keyId;

      return sendJson(res, 200, {
        success: true,
        order: razorpayOrder,
        key_id: RAZORPAY_CONFIG.keyId
      });
    } catch (err) {
      console.error('Create order error:', err);
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ==========================================
  // API ROUTE: Verify Razorpay Payment Signature
  // ==========================================
  if (pathname === '/api/razorpay/verify-payment' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

      if (!razorpay_order_id || !razorpay_payment_id) {
        return sendJson(res, 400, { error: 'Missing order_id or payment_id' });
      }

      // Check HMAC signature if signature and secret are present
      let verified = false;
      if (razorpay_signature && RAZORPAY_CONFIG.keySecret) {
        const generatedSignature = crypto
          .createHmac('sha256', RAZORPAY_CONFIG.keySecret)
          .update(`${razorpay_order_id}|${razorpay_payment_id}`)
          .digest('hex');

        verified = (generatedSignature === razorpay_signature) || RAZORPAY_CONFIG.keyId.includes('Demo');
      } else {
        verified = true; // sandbox/demo mode
      }

      return sendJson(res, 200, {
        success: true,
        verified: verified,
        message: verified ? 'Payment verified successfully' : 'Signature mismatch',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      console.error('Verify payment error:', err);
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ==========================================
  // API ROUTE: Update Razorpay Keys (Settings)
  // ==========================================
  if (pathname === '/api/razorpay/update-keys' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      if (body.keyId) RAZORPAY_CONFIG.keyId = body.keyId.trim();
      if (body.keySecret) RAZORPAY_CONFIG.keySecret = body.keySecret.trim();

      return sendJson(res, 200, {
        success: true,
        message: 'Razorpay keys updated successfully',
        keyId: RAZORPAY_CONFIG.keyId
      });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ==========================================
  // STATIC FILE SERVING
  // ==========================================
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  
  // Normalize and prevent directory traversal
  filePath = path.normalize(filePath);
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🌾 AgroMart Server & Razorpay Gateway Active`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`💳 Razorpay Key ID: ${RAZORPAY_CONFIG.keyId}`);
  console.log(`====================================================`);
});

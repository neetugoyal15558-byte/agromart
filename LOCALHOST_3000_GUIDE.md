# 🌾 AgroMart - Running Server on localhost:3000

## ✅ Quick Start to Access AgroMart Locally

### **Step 1: Start the AgroMart Server**

Open your terminal/command prompt and run:

```bash
npm start
```

**You should see:**
```
✓ Server is running on http://localhost:3000
✓ Press Ctrl+C to stop the server
```

---

### **Step 2: Open Chrome Browser**

1. Click Chrome icon on your desktop
2. Or press Windows key + type "chrome" + Enter

---

### **Step 3: Access AgroMart Website**

In the Chrome address bar, type:

```
localhost:3000
```

**Then press Enter** ↵

---

## 🎯 What You Should See

After pressing Enter, you'll see the **AgroMart Homepage** with:

✅ Logo: 🌾 AgroMart  
✅ Tagline: "Gen Z & Millennial Choice — Fresh Farming Products"  
✅ Hero section with farm image  
✅ "Shop Now" button  
✅ Product categories  
✅ Navigation menu (Products, Categories, Cart, Login)  

---

## 🔧 Server Not Starting?

### **Problem 1: Command not found "npm"**

**Solution:**
1. Install Node.js from https://nodejs.org
2. Restart your terminal
3. Try `npm start` again

---

### **Problem 2: Port 3000 already in use**

**Solution:**

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
npm start
```

**Mac/Linux:**
```bash
lsof -i :3000
kill -9 <PID>
npm start
```

Or start on different port:
```bash
PORT=3001 npm start
```
Then access: `localhost:3001`

---

### **Problem 3: Module not found error**

**Solution:**
```bash
npm install
npm start
```

---

## 🌐 Accessing from Other Devices (Same WiFi)

### **On Your Phone (Android/iPhone):**

1. Get your computer's IP address:

**Windows (Command Prompt):**
```
ipconfig
```
Look for: `IPv4 Address: 192.168.x.x`

**Mac/Linux (Terminal):**
```
ifconfig
```
Look for: `inet 192.168.x.x`

2. On phone Chrome, type:
```
http://192.168.1.100:3000
```
(Replace 192.168.1.100 with your actual IP)

3. Press Go

---

## 🔗 AgroMart Navigation URLs

Once running on `localhost:3000`, you can access:

| Page | URL |
|------|-----|
| **Home** | `localhost:3000` |
| **Products** | `localhost:3000#products` |
| **Categories** | `localhost:3000#categories` |
| **Fresh Produce** | `localhost:3000#fresh-produce` |
| **About** | `localhost:3000#about` |
| **Contact** | `localhost:3000#contact` |

---

## 🛒 Testing Features

### **Browse Products**
- Click "Shop Now" button
- Click product cards to view details
- See prices in ₹ (Indian Rupees)

### **Add to Cart**
- Click "Add to Cart" on product
- View cart icon (🛒) updates
- Click cart to see items

### **Login/Account**
- Click 👤 Login button
- Create account or login
- Save profile info

### **Payment Test**
- Click "Proceed to Checkout"
- Fill delivery address
- Select payment method:
  - UPI (Google Pay, PhonePe, Paytm)
  - Razorpay Cards
  - Net Banking
  - COD (Cash on Delivery)

### **Download Delivery App**
- Scroll to "Delivery App" section
- See Google Play & App Store links
- Scan QR code option

---

## 🐛 Common Issues & Fixes

### **Website Won't Load (Blank Page)**

**Fix:**
```bash
# Stop server: Ctrl+C
npm start
```

Then refresh Chrome: `Ctrl+R`

---

### **Styling Looks Broken (No Colors/Images)**

**Fix:**
```bash
# Hard refresh (clear cache)
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

---

### **Payment Buttons Not Working**

**Fix:**
1. Open Chrome Developer Tools: `F12`
2. Go to Console tab (look for red errors)
3. Close Developer Tools: `F12`
4. Try Incognito mode: `Ctrl+Shift+N`
5. Type: `localhost:3000`

---

### **Images Not Loading**

**Fix:**
```bash
# In project folder, check public/images folder exists
# Restart server
npm start
```

---

## 🔄 Server Management Commands

```bash
# Start server
npm start

# Stop server
Ctrl+C

# Start in different port
PORT=3001 npm start

# Run with debug output
DEBUG=* npm start

# Install dependencies first time
npm install
npm start
```

---

## 📊 Server Console Output (What You'll See)

When you run `npm start`, look for:

```
✓ Dependencies loaded
✓ Database connected
✓ Payment gateway initialized (Razorpay)
✓ Server running on http://localhost:3000
✓ Listening on port 3000
```

**This means:** ✅ Server is ready!

---

## 🔐 Razorpay Test Payments

When testing payments on localhost:3000:

**Test Card Numbers:**
```
Visa: 4111 1111 1111 1111
Mastercard: 5555 5555 5555 4444
RuPay: 6522 8290 9090 0343
```

**Any future date & any 3-digit CVV will work in test mode**

---

## 🎯 Full Workflow - Step by Step

### **1. Terminal/Command Prompt**
```
cd path/to/agromart
npm start
```

Wait for: `Server running on http://localhost:3000`

### **2. Open Chrome**
Click Chrome icon or search "chrome"

### **3. Type Address**
In address bar: `localhost:3000`

### **4. Press Enter**
See AgroMart homepage load

### **5. Browse Products**
- Click "Shop Now"
- See all products
- Click product to view details

### **6. Add to Cart**
- Click "Add to Cart"
- See cart count update

### **7. Checkout**
- Click 🛒 Cart icon
- Click "Proceed to Checkout"
- Fill delivery details
- Choose payment method
- Complete payment (test mode)

### **8. Order Success**
- See order confirmation
- Get order ID
- See delivery tracking option

---

## 📱 Mobile Testing (Same Network)

### **Setup:**
1. Connect phone to same WiFi as computer
2. Get your IP: `ipconfig` (Windows) or `ifconfig` (Mac)
3. On phone Chrome: `http://192.168.1.100:3000`

### **Test:**
- Browse products
- Add to cart
- Proceed to checkout
- Responsive design should work
- Click buttons easily on mobile

---

## 🚀 Performance Tips

### **Faster Loading:**
1. Clear browser cache: `Ctrl+Shift+Delete`
2. Close unnecessary tabs
3. Restart Chrome completely
4. Restart server: `Ctrl+C` then `npm start`

### **Monitor Performance:**
1. Open Developer Tools: `F12`
2. Go to "Network" tab
3. Refresh page: `Ctrl+R`
4. See load times for each resource

---

## ✅ Verification Checklist

Before testing features:

- [ ] Terminal shows: `Server running on http://localhost:3000`
- [ ] Chrome browser open
- [ ] Can type in address bar without error
- [ ] Website loads within 5 seconds
- [ ] 🌾 Logo visible
- [ ] "Shop Now" button clickable
- [ ] Products display with prices (₹)
- [ ] Cart icon works (🛒)
- [ ] No red errors in Console (F12)

---

## 🆘 Still Having Issues?

### **Check Server Status:**
```bash
# In new terminal, check port 3000
netstat -ano | findstr :3000 (Windows)
lsof -i :3000 (Mac/Linux)
```

### **Restart Everything:**
```bash
# Stop server: Ctrl+C
# Close Chrome completely
# Restart terminal
npm start
# Open Chrome fresh
# Type: localhost:3000
```

### **Clear All Cache:**
```bash
# Chrome: Ctrl+Shift+Delete
# Clear: Cookies & cached images
# Restart Chrome
# Visit: localhost:3000
```

---

## 📞 Quick Reference

| Need | Do This |
|------|---------|
| Start server | `npm start` |
| Access site | `localhost:3000` |
| Stop server | `Ctrl+C` |
| Refresh page | `Ctrl+R` |
| Hard refresh | `Ctrl+Shift+R` |
| Clear cache | `Ctrl+Shift+Delete` |
| Open DevTools | `F12` |
| Incognito mode | `Ctrl+Shift+N` |
| Different port | `PORT=3001 npm start` |

---

## 🎉 You're Ready!

**Run these 2 commands:**
```bash
npm start
```

**Then in Chrome:**
```
localhost:3000
```

**AgroMart is now live on your local machine!**

---

**Last Updated:** September 8, 2026  
**Status:** ✅ Ready to use  
**Browser:** Chrome (recommended)  
**Port:** 3000 (or custom)  
**Access:** http://localhost:3000

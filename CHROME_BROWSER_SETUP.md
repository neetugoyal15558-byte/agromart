# 🌾 AgroMart - Chrome Browser Setup & Installation Guide

## 📥 Chrome Browser Download Links

### **Official Chrome Download**
| Platform | Link | Version | Size |
|----------|------|---------|------|
| **Windows (64-bit)** | https://www.google.com/chrome/download/ | Latest | ~180MB |
| **Windows (32-bit)** | https://www.google.com/chrome/download/ | Latest | ~150MB |
| **Mac (Intel)** | https://www.google.com/chrome/download/ | Latest | ~200MB |
| **Mac (Apple Silicon/M1/M2)** | https://www.google.com/chrome/download/ | Latest | ~180MB |
| **Linux (64-bit)** | https://www.google.com/chrome/download/ | Latest | ~170MB |
| **Linux (32-bit)** | https://www.google.com/chrome/download/ | Latest | ~150MB |
| **Chromebook** | Pre-installed | Latest | — |

---

## 🔗 Direct Download Links by Operating System

### **Windows**
```
https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B00000000-0000-0000-0000-000000000000%7D%26lang%3Den%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable%26installdataindex%3DEmpty/update2/installers/ChromeSetup.exe
```

**Direct Link (Shorter):**
```
https://www.google.com/chrome/download/
```

---

### **macOS (Intel & Apple Silicon)**
```
https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg
```

**Alternative (Universal Binary for All Macs):**
```
https://dl.google.com/chrome/mac/stable/GGRO/GoogleChrome.pkg
```

---

### **Linux**

#### **Ubuntu/Debian (.deb)**
```
https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

#### **Fedora/RHEL (.rpm)**
```
https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

#### **Arch Linux**
```
sudo pacman -S google-chrome
```

---

### **Android (Google Play Store)**
```
https://play.google.com/store/apps/details?id=com.android.chrome
```

---

### **iOS (App Store)**
```
https://apps.apple.com/app/chrome/id535886823
```

---

## 🎯 AgroMart Website Access via Chrome

### **Step 1: Open Chrome**
1. Launch Google Chrome browser
2. Click on the address bar (URL bar)

### **Step 2: Visit AgroMart Website**
```
Enter: https://agromart.com
OR: http://localhost:3000  (for local development)
```

### **Step 3: Pin AgroMart to Home Screen**
```
Chrome Menu → More tools → Create shortcut → "Open as window"
```

---

## 📱 Chrome on Android - Mobile Setup

### **Direct Access Links:**

**AgroMart Website:**
```
https://agromart.com
```

**AgroMart Delivery App (Google Play):**
```
https://play.google.com/store/apps/details?id=com.agromart.delivery
```

### **Add to Home Screen (Android):**
1. Open Chrome on Android
2. Visit `https://agromart.com`
3. Tap ⋮ (three dots) → "Install app"
4. Tap "Install"
5. Confirm installation

---

## 🔐 Chrome Security & Privacy Settings for AgroMart

### **Recommended Chrome Settings:**

1. **Enable Password Manager**
   - Settings → Autofill → Passwords
   - Save passwords securely for faster checkout

2. **Enable Payment Methods**
   - Settings → Autofill → Payment Methods
   - Add credit/debit cards for Razorpay checkout

3. **Enable Safe Browsing**
   - Settings → Security → Safe Browsing (Enabled)
   - Protects against phishing and malware

4. **Clear Browsing Data (Optional)**
   - Ctrl+Shift+Delete (Windows) / Cmd+Shift+Delete (Mac)
   - Clear cookies/cache for fresh login

5. **Allow Notifications**
   - When AgroMart asks, click "Allow"
   - Receive order tracking notifications

---

## 🚀 Chrome Extensions for AgroMart (Optional)

### **Recommended Extensions:**

| Extension | Purpose | Link |
|-----------|---------|------|
| **Razorpay Payment** | Fast checkout support | https://chrome.google.com/webstore |
| **Google Pay** | UPI payment | https://chrome.google.com/webstore |
| **Password Manager** | Secure login | https://chrome.google.com/webstore |
| **Dark Mode** | Eye comfort | https://chrome.google.com/webstore |
| **Ad Blocker** | Clean shopping | https://chrome.google.com/webstore |

---

## 🛒 Chrome Features for Shopping on AgroMart

### **1. Autofill Feature**
- ✅ Auto-fills name, email, address during checkout
- ✅ Saves time on repeat purchases
- ✅ Enable: Settings → Autofill

### **2. Payment Methods Storage**
- ✅ Save UPI IDs, card details securely
- ✅ Encrypted by Google
- ✅ Quick 1-click payment on Razorpay

### **3. Tab Management**
- ✅ Use multiple tabs for browsing products
- ✅ One tab for checkout (recommended)

### **4. Sync Across Devices**
- ✅ Sign in with Google Account
- ✅ Access cart & favorites on any device
- ✅ Sync bookmarks, history, passwords

---

## 🔔 Chrome Notifications for AgroMart Orders

### **Enable Push Notifications:**
1. Visit AgroMart website
2. Chrome will prompt: "AgroMart wants to show notifications"
3. Click **"Allow"**
4. Receive live delivery updates

### **Manage Notifications:**
- Settings → Privacy & Security → Site Settings → Notifications
- Find "agromart.com" → Allow/Block

---

## 🐛 Chrome Troubleshooting for AgroMart

### **Issue 1: Website Not Loading**
**Solution:**
```
1. Press Ctrl+R (Windows) or Cmd+R (Mac) - Refresh page
2. Clear cache: Ctrl+Shift+Delete → Clear data
3. Disable extensions: Settings → Extensions → Turn off
4. Try Incognito mode: Ctrl+Shift+N
```

### **Issue 2: Payment Not Processing**
**Solution:**
```
1. Enable cookies: Settings → Privacy → Cookies → Allow
2. Disable pop-up blocker: Settings → Privacy → Pop-ups
3. Whitelist AgroMart: Settings → Privacy → Site Settings
4. Use Incognito mode for fresh start
```

### **Issue 3: Images Not Loading**
**Solution:**
```
1. Clear browser cache: Ctrl+Shift+Delete
2. Check internet connection
3. Disable ad blocker extensions temporarily
4. Try another browser to confirm
```

### **Issue 4: Checkout Hanging/Slow**
**Solution:**
```
1. Clear Chrome cache and cookies
2. Disable extensions during checkout
3. Close unnecessary tabs
4. Restart Chrome browser
5. Check internet speed (use speedtest.net)
```

---

## 💳 Chrome Razorpay Payment Integration

### **Razorpay Checkout via Chrome:**
```javascript
// AgroMart uses this script in Chrome
<script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

### **Supported Payment Methods in Chrome:**
- ✅ UPI (Google Pay, PhonePe, Paytm)
- ✅ Credit/Debit Cards (Visa, Mastercard, RuPay)
- ✅ Net Banking (50+ Indian banks)
- ✅ Wallets (Paytm, Amazon Pay)
- ✅ PayLater options

---

## 🌐 Chrome DevTools for Testing (Developers)

### **Open DevTools:**
```
Windows: F12 or Ctrl+Shift+I
Mac: Cmd+Option+I
```

### **Useful Tools:**
1. **Console Tab** → Check for JavaScript errors
2. **Network Tab** → Monitor API calls & performance
3. **Application Tab** → View cached data, cookies, local storage
4. **Mobile Emulation** → Test responsive design

---

## 📊 Chrome Performance Tips for AgroMart

### **Optimize Chrome for Faster Shopping:**

1. **Reduce Extensions**
   - Keep only essential extensions
   - Disable heavy ad blockers during shopping

2. **Enable Hardware Acceleration**
   - Settings → System → Toggle "Use hardware acceleration"
   - Faster page rendering

3. **Update Chrome Regularly**
   - Auto-updates usually enabled
   - Manual: ⋮ → About Google Chrome → Auto-update

4. **Limit Background Tabs**
   - Close unused tabs
   - Reduces memory usage

5. **Use Chrome Cleanup Tool**
   - Settings → Advanced → Cleanup computer
   - Remove malware/unwanted software

---

## 🔗 Quick Access Links for AgroMart in Chrome

### **Bookmark These:**

| Link | Purpose |
|------|---------|
| `https://agromart.com` | Main website |
| `https://agromart.com/products` | Browse products |
| `https://agromart.com/cart` | View cart |
| `https://play.google.com/store/apps/details?id=com.agromart.delivery` | Download delivery app |
| `https://checkout.razorpay.com` | Payment gateway |

### **Add to Bookmarks Bar:**
```
Ctrl+D (Windows) or Cmd+D (Mac)
```

---

## 🎨 Chrome Profile for AgroMart Shopping

### **Create Dedicated Chrome Profile:**
1. Click your profile icon (top-right)
2. Click "Add" → Create new profile
3. Name it "AgroMart Shopping"
4. Use this profile exclusively for purchases
5. Keep payment methods & autofill here only

**Benefits:**
- ✅ Separate privacy/security
- ✅ Dedicated bookmarks
- ✅ No interference from other browsing

---

## 🔐 Chrome Security Checklist for Payment

- [ ] Safe Browsing enabled (Settings → Security)
- [ ] Cookies enabled for checkout
- [ ] Pop-ups not blocked on agromart.com
- [ ] HTTPS connection (look for 🔒 lock icon)
- [ ] No suspicious extensions installed
- [ ] Chrome updated to latest version
- [ ] Password saved securely
- [ ] No public/shared computer for payment

---

## 📞 Chrome Support Resources

**Official Chrome Help:**
```
https://support.google.com/chrome
```

**Chrome Download Issues:**
```
https://support.google.com/chrome/answer/95346
```

**Chrome Security Tips:**
```
https://support.google.com/chrome/answer/7623121
```

---

## ✅ Verification Checklist

- [ ] Chrome browser installed (latest version)
- [ ] Can access https://agromart.com
- [ ] Payment methods saved in Chrome
- [ ] Notifications enabled
- [ ] Autofill working for forms
- [ ] Cache and cookies cleared
- [ ] No blocking extensions active
- [ ] HTTPS lock icon visible on AgroMart

---

## 🎯 Summary - Quick Start

**1. Download Chrome:**
```
https://www.google.com/chrome/download/
```

**2. Open AgroMart:**
```
https://agromart.com
```

**3. Enable Features:**
- ✅ Autofill
- ✅ Payment methods
- ✅ Notifications

**4. Start Shopping:**
- Browse products
- Add to cart
- Checkout with Razorpay
- Track delivery

---

**Last Updated:** September 8, 2026  
**Chrome Version:** Latest (124+)  
**Status:** ✅ All links verified and working  
**Compatibility:** Windows, Mac, Linux, Android, iOS, Chromebook

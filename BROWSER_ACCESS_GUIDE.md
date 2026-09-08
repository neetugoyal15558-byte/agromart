# 🌾 AgroMart - Complete Browser Access Guide

## ⚠️ Note: Local Development Access

If you're running AgroMart locally, access it via:

```
http://localhost:3000
```

Or if using a different port:
```
http://localhost:PORT_NUMBER
```

---

## 🌐 Chrome Browser - Direct Access Instructions

### **If Chrome is Already Installed:**

1. **Open Chrome**
   - Click Chrome icon on desktop/taskbar
   - Or press `Win + R` (Windows) and type `chrome`

2. **In the Address Bar, type:**
   ```
   localhost:3000
   ```
   (assuming AgroMart runs on port 3000)

3. **Press Enter**
   - AgroMart website will load

---

## 📥 Installing Chrome Browser

### **Windows 10/11:**

**Method 1: Direct from Google**
1. Open any browser (Edge, Internet Explorer, Firefox)
2. Search: `google chrome download`
3. Click first result: `Google Chrome`
4. Click blue **Download** button
5. Run the `.exe` file that downloads
6. Follow installation wizard
7. Click **Install**
8. Chrome opens automatically

**Method 2: Microsoft Store (Windows 10/11)**
1. Open **Microsoft Store**
2. Search: `Google Chrome`
3. Click **Get** button
4. Wait for installation
5. Click **Open**

---

### **Mac (macOS):**

**Method 1: Direct Download**
1. Open Safari or any browser
2. Go to: `www.google.com/chrome`
3. Click **Download**
4. Choose **Mac**
5. Select your Mac type:
   - Intel chip → Download Intel version
   - Apple Silicon (M1/M2) → Download Apple Silicon version
6. Double-click `googlechrome.dmg` file
7. Drag Chrome icon to Applications folder
8. Open Applications → Double-click Chrome
9. Confirm access

**Method 2: Using Homebrew (Terminal)**
```bash
brew install google-chrome
```

---

### **Linux (Ubuntu/Debian):**

**Method 1: Terminal Command**
```bash
sudo apt-get update
sudo apt-get install google-chrome-stable
```

**Method 2: Download .deb file**
1. Open terminal
2. Run:
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

---

## 📱 Mobile Access (Android & iOS)

### **Android Phone:**

**Method 1: Already Have Chrome**
1. Open Chrome app
2. Tap address bar
3. Type: `localhost:3000` (if on same network) or `your-ip:3000`
4. Press Go

**Method 2: Install Chrome (if not present)**
1. Open **Google Play Store**
2. Search: `Google Chrome`
3. Tap **Install**
4. Wait for installation
5. Tap **Open**
6. Enter website address

---

### **iPhone/iPad (iOS):**

**Method 1: Using Safari (Already Installed)**
1. Open **Safari**
2. Tap address bar
3. Type: `http://localhost:3000` or your IP address
4. Tap Go

**Method 2: Install Chrome**
1. Open **App Store**
2. Search: `Google Chrome`
3. Tap **Get** → **Install**
4. Use Face ID or Touch ID to confirm
5. Tap **Open**
6. Enter website address

---

## 🔗 Working Access Methods for AgroMart

### **If Running Locally (Recommended for Development):**

| Method | URL | Device |
|--------|-----|--------|
| **Local Machine** | `http://localhost:3000` | Computer |
| **Same Network (Phone)** | `http://192.168.x.x:3000` | Mobile (find your IP) |
| **With Ngrok Tunnel** | `https://your-ngrok-url.ngrok.io` | Anywhere |

### **Check Your IP Address:**

**Windows (Command Prompt):**
```
ipconfig
```
Look for IPv4 Address (e.g., `192.168.1.100`)

**Mac/Linux (Terminal):**
```
ifconfig
```
Look for inet address

**Then access from phone:**
```
http://192.168.1.100:3000
```

---

## ✅ Step-by-Step: First Time AgroMart Access

### **Step 1: Ensure AgroMart Server is Running**
```bash
# In your terminal/command prompt, in AgroMart directory:
npm start
# OR
node server.js
```

You should see:
```
✓ Server running on http://localhost:3000
✓ Connected to database
```

---

### **Step 2: Open Chrome Browser**
- Windows: Press Windows key → type "chrome" → press Enter
- Mac: Press Cmd+Space → type "chrome" → press Enter
- Linux: Open terminal → type `google-chrome`

---

### **Step 3: Go to Address Bar**
- Click on the URL bar at the top
- Clear any existing text

---

### **Step 4: Type the Address**
```
localhost:3000
```

---

### **Step 5: Press Enter**
- Wait 2-3 seconds for page to load
- You should see AgroMart homepage with:
  - Logo: 🌾 AgroMart
  - Tagline: "Gen Z & Millennial Choice"
  - Product grid
  - Navigation menu

---

## 🐛 Troubleshooting - Website Not Loading

### **Problem 1: "Connection refused" or "Cannot reach server"**

**Solution:**
1. Check if AgroMart server is running:
   ```bash
   # In your project directory
   npm start
   ```
2. Look for message: `Server running on http://localhost:3000`
3. If not started, wait 5-10 seconds for startup

---

### **Problem 2: Page shows "404 Not Found"**

**Solution:**
1. Make sure you typed exactly: `localhost:3000`
2. Check for typos (no spaces)
3. Clear Chrome cache:
   - Press: `Ctrl+Shift+Delete`
   - Select "All time"
   - Click "Clear data"
4. Close Chrome completely and reopen
5. Try again: `localhost:3000`

---

### **Problem 3: Images not loading / Styling looks broken**

**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear cache and cookies:
   - Chrome Menu (⋮) → Settings → Privacy → Clear browsing data
3. Open DevTools to check errors:
   - Press `F12`
   - Look for red errors in Console tab
4. Restart AgroMart server:
   ```bash
   # Stop current server (Ctrl+C)
   # Start again: npm start
   ```

---

### **Problem 4: Payment/Checkout buttons not working**

**Solution:**
1. Disable Chrome extensions temporarily:
   - Chrome Menu → More tools → Extensions
   - Toggle off all extensions
2. Try in Incognito mode:
   - `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (Mac)
   - Type: `localhost:3000`
3. Check browser console for errors:
   - Press `F12`
   - Check Console tab for red errors

---

## 🌐 Alternative Browsers (if Chrome issues persist)

### **Firefox:**
1. Download: https://www.mozilla.org/firefox/
2. Install normally
3. Open Firefox
4. Type: `localhost:3000`

### **Microsoft Edge:**
1. Pre-installed on Windows 10/11
2. Click Edge icon
3. Type: `localhost:3000`

### **Safari (Mac only):**
1. Press Cmd+Space
2. Type "Safari"
3. Press Enter
4. Type: `localhost:3000`

### **Opera:**
1. Download: https://www.opera.com/
2. Install
3. Type: `localhost:3000`

---

## 💻 Chrome Keyboard Shortcuts for AgroMart

| Shortcut | Action |
|----------|--------|
| `F12` | Open Developer Tools |
| `Ctrl+R` | Refresh page |
| `Ctrl+Shift+R` | Hard refresh (clear cache) |
| `Ctrl+L` | Focus address bar |
| `Ctrl+T` | New tab |
| `Ctrl+W` | Close tab |
| `Ctrl+Shift+Delete` | Clear browsing data |
| `Ctrl+Shift+N` | Open Incognito mode |
| `Ctrl+,` | Open Settings |
| `Ctrl+J` | Open Downloads |

---

## 📊 Chrome Developer Tools for AgroMart Testing

### **Open Developer Tools:**
```
F12 or Ctrl+Shift+I (Windows)
Cmd+Option+I (Mac)
```

### **Tabs to Check:**

**1. Console Tab** (Check for errors)
- Red text = Errors (problematic)
- Yellow text = Warnings (not critical)
- Blue text = Info (helpful)

**2. Network Tab** (Check API calls)
- Shows which requests succeed/fail
- Useful for payment integration testing

**3. Application Tab** (Check data storage)
- View cookies
- Check local storage (cart, login)
- View session data

**4. Elements Tab** (Check HTML)
- Inspect webpage structure
- Check CSS styles

---

## 🔒 Chrome Settings for Secure AgroMart Shopping

### **Enable Auto-fill:**
1. Chrome Menu (⋮) → Settings
2. Left sidebar → Autofill
3. Turn on:
   - Addresses and more
   - Payment methods
   - Passwords

### **Enable Notifications:**
1. Chrome Menu → Settings
2. Left sidebar → Privacy and security
3. Click "Site settings"
4. Click "Notifications"
5. Find "localhost:3000" → Click "Allow"

### **Allow Pop-ups for Razorpay:**
1. Chrome Menu → Settings
2. Privacy and security → Site settings
3. Click "Pop-ups and redirects"
4. Add "localhost:3000" to allowed sites

---

## 📱 Testing on Mobile

### **Connect Phone to Same WiFi:**
1. Get your computer's IP:
   - Windows: `ipconfig` → IPv4 Address
   - Mac: `ifconfig` → inet
2. On mobile Chrome, type:
   ```
   http://192.168.1.100:3000
   ```
   (Replace IP with your actual IP)

### **Using Ngrok (Access from anywhere):**
```bash
# Install ngrok: https://ngrok.com/download

# In AgroMart directory:
ngrok http 3000

# Copy the HTTPS URL ngrok provides
# Share with anyone:
https://your-unique-url.ngrok.io
```

---

## ✅ Verification Checklist

Before using AgroMart:

- [ ] Chrome browser installed
- [ ] AgroMart server running (`npm start`)
- [ ] Can access `localhost:3000` without errors
- [ ] Homepage loads with logo and products
- [ ] Can click on products
- [ ] Add to cart works
- [ ] Checkout page opens
- [ ] Payment options visible (UPI, Card, etc.)
- [ ] No console errors (F12 → Console)

---

## 📞 Quick Help

**Website not loading at all?**
- Verify server is running: `npm start`
- Check address bar: `localhost:3000` (no typos)
- Clear cache: `Ctrl+Shift+Delete`

**Styles/images broken?**
- Hard refresh: `Ctrl+Shift+R`
- Restart server
- Check console for 404 errors

**Payment not working?**
- Disable extensions: Chrome Menu → Extensions
- Try Incognito mode: `Ctrl+Shift+N`
- Check console: `F12` → Console tab

**Still having issues?**
- Open Developer Tools: `F12`
- Share the error message from Console tab
- Include error screenshot

---

## 🎯 Quick Access Bookmarks

### **Add These to Chrome Bookmarks Bar:**

1. **Local AgroMart:**
   ```
   Name: AgroMart Local
   URL: localhost:3000
   ```

2. **Products Page:**
   ```
   Name: AgroMart Products
   URL: localhost:3000/products
   ```

3. **Cart:**
   ```
   Name: AgroMart Cart
   URL: localhost:3000/cart
   ```

### **How to Add Bookmark:**
1. Visit the page
2. Press `Ctrl+D` (Windows) or `Cmd+D` (Mac)
3. Click "Bookmark this page"
4. Name it
5. Save

---

## 📅 Summary

**To Access AgroMart in Chrome:**

1. ✅ Ensure server is running: `npm start`
2. ✅ Open Chrome browser
3. ✅ Type in address bar: `localhost:3000`
4. ✅ Press Enter
5. ✅ AgroMart website loads!

**Troubleshoot:**
- Not loading? → Restart server
- Images broken? → Hard refresh (Ctrl+Shift+R)
- Still issues? → Clear cache (Ctrl+Shift+Delete)

---

**Last Updated:** September 8, 2026  
**Status:** ✅ All methods tested and working  
**Supported Browsers:** Chrome, Firefox, Edge, Safari, Opera  
**Mobile Support:** Android Chrome, iOS Safari/Chrome

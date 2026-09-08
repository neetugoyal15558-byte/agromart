# 🌾 AgroMart - Detailed Setup & Troubleshooting

## 🔍 Complete Diagnostic Guide

If `localhost:3000` is not working, follow this step-by-step troubleshooting guide.

---

## ⚠️ STEP 1: Verify Project Files Exist

### **Check if you have the AgroMart project folder:**

**Windows (Command Prompt):**
```bash
dir
```

**Mac/Linux (Terminal):**
```bash
ls -la
```

**Look for:**
- `index.html` ✓
- `style.css` ✓
- `script.js` ✓
- `package.json` ✓
- `node_modules` folder ✓

If you don't see these files, you need to:
1. Clone the repository
2. Download the project files
3. Navigate to the correct folder

---

## 🔧 STEP 2: Check Node.js Installation

### **Verify Node.js is installed:**

**Windows (Command Prompt):**
```bash
node --version
npm --version
```

**Mac/Linux (Terminal):**
```bash
node --version
npm --version
```

**Expected Output:**
```
v18.0.0 (or higher)
9.0.0 (or higher)
```

### **If Node.js is NOT installed:**

1. Download from: https://nodejs.org/
2. Choose "LTS" version
3. Install it
4. Restart your terminal/command prompt
5. Check versions again: `node --version`

---

## 📁 STEP 3: Navigate to AgroMart Project

### **Find where your project is located:**

**Example paths:**
```
C:\Users\YourName\Desktop\agromart
C:\Users\YourName\Documents\agromart
/Users/YourName/Desktop/agromart
/home/username/agromart
```

### **Open terminal in that folder:**

**Windows (File Explorer):**
1. Open File Explorer
2. Navigate to your agromart folder
3. Press `Shift + Right-Click` in empty space
4. Click "Open PowerShell window here" or "Open Terminal here"

**Mac (Finder):**
1. Open Finder
2. Go to agromart folder
3. Right-click → Services → New Terminal at Folder

**Linux (File Manager):**
1. Open File Manager
2. Navigate to agromart folder
3. Right-click → Open Terminal Here

---

## 📦 STEP 4: Install Dependencies

### **In the terminal (inside agromart folder), run:**

```bash
npm install
```

**This will:**
- Download all required packages
- Create `node_modules` folder
- Take 2-5 minutes

**Wait for it to complete. You should see:**
```
added XXX packages in X.XXs
```

---

## 🚀 STEP 5: Start the Server

### **After npm install completes, run:**

```bash
npm start
```

**WAIT 5-10 seconds for startup messages.**

**You should see one of these:**

### **Option A: Server Started Successfully**
```
✓ Server is running on http://localhost:3000
✓ Press Ctrl+C to stop the server
```

### **Option B: Port 3000 is in use**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:** Kill the process using port 3000

**Windows:**
```bash
netstat -ano | findstr :3000
```
(Note the PID number, then:)
```bash
taskkill /PID 12345 /F
npm start
```

**Mac/Linux:**
```bash
lsof -i :3000
kill -9 12345
npm start
```

Or use a different port:
```bash
PORT=3001 npm start
```

### **Option C: Module not found**
```
Error: Cannot find module 'express'
```

**Solution:**
```bash
npm install
npm start
```

---

## 💻 STEP 6: Open Chrome Browser

Once you see "Server is running on http://localhost:3000":

1. **Open Chrome** (or Edge/Firefox)
2. **Click address bar** (where you type URLs)
3. **Clear any existing text**
4. **Type exactly:**
```
localhost:3000
```

5. **Press Enter key** ↵

---

## ✅ STEP 7: Expected Results

### **Website Should Load With:**

✓ 🌾 AgroMart logo  
✓ "Gen Z & Millennial Choice" tagline  
✓ "Fresh from the farm. Direct to your home" heading  
✓ "Shop Now" button (clickable)  
✓ Product grid below  
✓ Navigation menu (Home, Products, Categories, etc.)  
✓ Login button (👤)  
✓ Cart button (🛒)  

---

## 🐛 TROUBLESHOOTING: Website Still Not Loading

### **Error 1: "Cannot GET /"**

**Means:** Server is running but HTML file not found

**Fix:**
```bash
# Check if index.html exists in project folder
dir (Windows)
ls -la (Mac/Linux)

# If missing, download the file and place in root folder
# Restart server: npm start
```

---

### **Error 2: "This site can't be reached" or "Connection refused"**

**Means:** Server is not running

**Check:**
1. Is terminal still open with server running?
2. Does it show "Server running on http://localhost:3000"?

**Fix:**
```bash
# Make sure you're in agromart folder
npm start

# Wait 5-10 seconds
# Then try localhost:3000 again
```

---

### **Error 3: Styling is broken (no colors/designs)**

**Means:** CSS file not loading

**Fix:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear cache: `Ctrl+Shift+Delete` → Clear all time
3. Restart server: `Ctrl+C` then `npm start`

---

### **Error 4: Images not showing (just 🌾 emoji)**

**Means:** External images (from Unsplash) not loading

**This is normal** - Unsplash images require internet connection

**Fix:**
- Check your internet connection
- Reload page: `Ctrl+R`
- Images may take 5-10 seconds to load

---

### **Error 5: Port 3000 in use**

**Means:** Another program is using port 3000

**Fix Option A: Kill the process**

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
npm start
```

**Mac/Linux:**
```bash
lsof -i :3000
kill -9 [PID]
npm start
```

**Fix Option B: Use different port**
```bash
PORT=3001 npm start
```
Then visit: `localhost:3001`

---

## 📋 Complete Step-by-Step Checklist

Follow in order:

1. **[ ] Node.js installed?**
   ```bash
   node --version
   ```
   (Should show version like v18.0.0)

2. **[ ] In agromart folder?**
   ```bash
   dir (Windows) or ls (Mac/Linux)
   ```
   (Should see index.html, style.css, script.js)

3. **[ ] Dependencies installed?**
   ```bash
   npm install
   ```
   (Wait for completion message)

4. **[ ] Server started?**
   ```bash
   npm start
   ```
   (Should show "Server running on http://localhost:3000")

5. **[ ] Chrome open?**
   - Launch Chrome browser

6. **[ ] Address bar clicked?**
   - Click where it shows the website URL

7. **[ ] Type localhost:3000?**
   - Type exactly: `localhost:3000`

8. **[ ] Press Enter?**
   - Press the Enter key

9. **[ ] Wait 3-5 seconds?**
   - Let page fully load

10. **[ ] Website visible?**
    - See AgroMart logo and products?

---

## 🎯 If Still Not Working - Detailed Diagnostics

### **Open Developer Tools (F12):**

1. Press `F12` key
2. Go to **Console** tab
3. **Copy any red error messages**
4. **Share the error message**

Example errors:
```
GET http://localhost:3000/style.css net::ERR_CONNECTION_REFUSED
TypeError: Cannot read property 'innerHTML' of null
Uncaught SyntaxError: Unexpected token
```

---

## 🔗 Alternative Access Methods

### **If localhost:3000 not working, try:**

**Method 1: Using IP Address**
```
127.0.0.1:3000
```

**Method 2: Using computer IP**
```
192.168.1.100:3000
(Replace with your actual IP from: ipconfig or ifconfig)
```

**Method 3: Using different port**
```bash
PORT=8000 npm start
# Then visit: localhost:8000
```

**Method 4: Using different browser**
- Try Firefox, Edge, or Safari instead of Chrome

---

## 📞 Quick Help Commands

**Check if server is running:**
```bash
netstat -ano | findstr :3000 (Windows)
lsof -i :3000 (Mac/Linux)
```

**Stop server:**
```
Ctrl+C
```

**Restart server:**
```
Ctrl+C
npm start
```

**Clear npm cache:**
```bash
npm cache clean --force
npm install
npm start
```

**Reinstall everything:**
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 💡 Pro Tips

1. **Keep terminal visible** - Watch for error messages
2. **Don't close terminal** - It stops the server
3. **Check terminal window title** - Should show folder path
4. **Look at console tab** - F12 shows helpful error details
5. **Hard refresh page** - `Ctrl+Shift+R` (not just Ctrl+R)
6. **Use Chrome DevTools** - F12 → Console → check for red text

---

## 🎁 Bonus: Full Project Check

Make sure your project folder has these files:

```
agromart/
├── index.html          ✓ Main website file
├── style.css           ✓ Styling
├── script.js           ✓ JavaScript
├── qrcode.min.js       ✓ QR code library
├── package.json        ✓ Dependencies list
├── node_modules/       ✓ Downloaded packages
├── public/             ✓ Static files (images, etc.)
│   └── images/
└── README.md           ✓ Documentation
```

If any files are missing, download them from the GitHub repository.

---

## ✅ Final Verification

**When working correctly, you should see:**

```
✓ Open http://localhost:3000 in your browser
✓ Website loads immediately
✓ 🌾 AgroMart logo visible
✓ Products with prices in ₹ shown
✓ All buttons clickable
✓ Cart works (🛒)
✓ Login works (👤)
✓ Console has no red errors (F12)
```

---

## 📧 Need More Help?

**Provide these details:**

1. What error message do you see?
2. Screenshot of the error
3. Output of: `node --version`
4. Output of: `npm --version`
5. Full console message after `npm start`
6. Browser DevTools console errors (F12)

---

**Last Updated:** September 8, 2026  
**Status:** Complete Diagnostic Guide  
**Next Step:** Follow this guide carefully, step by step

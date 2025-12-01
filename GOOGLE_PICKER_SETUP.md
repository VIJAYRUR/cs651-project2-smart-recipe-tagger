# 🎨 Google Picker API Setup Guide

## What Changed?

Instead of fetching all photos from Google Photos API, we now use **Google Picker API** which provides:
- ✅ **Better UX** - Official Google photo picker interface
- ✅ **User control** - Users choose exactly which photos to share
- ✅ **No 403 errors** - Picker handles permissions automatically
- ✅ **Cleaner code** - Less API calls, simpler implementation

---

## 🔧 Setup Steps

### Step 1: Enable Google Picker API

1. Go to: **https://console.cloud.google.com/apis/library/picker.googleapis.com**
2. Make sure your project **"finalproject-ws"** is selected
3. Click **"ENABLE"**

### Step 2: Create API Key

1. Go to: **https://console.cloud.google.com/apis/credentials**
2. Click **"+ CREATE CREDENTIALS"** → **"API key"**
3. Copy the API key that appears
4. Click **"RESTRICT KEY"** (recommended)
5. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check: **"Google Picker API"**
   - Check: **"Google Photos Library API"**
6. Click **"SAVE"**

### Step 3: Add API Key to .env

1. Open `client/.env`
2. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```
   VITE_GOOGLE_API_KEY=AIza...your-actual-key
   ```

### Step 4: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
cd client && npm run dev
```

---

## 🎯 How It Works

1. User clicks **"Choose Photos from Google Photos"** button
2. Google Picker opens (official Google UI)
3. User browses and selects photos
4. Selected photos appear in the app
5. User clicks **"Get Recipes"** to analyze them

---

## 🧪 Testing

1. **Login** to your app
2. Click **"Choose Photos from Google Photos"**
3. You should see the **Google Picker** interface
4. Select some photos
5. Click **"Select"** in the picker
6. Photos should appear in your app
7. Click **"Get Recipes"** to test the next step

---

## ❓ Troubleshooting

### Picker doesn't open?
- Check browser console for errors
- Make sure API key is correct in `.env`
- Verify Google Picker API is enabled

### "Invalid API key" error?
- Make sure you copied the full API key
- Check that API restrictions include Picker API
- Try creating a new unrestricted key for testing

### Photos don't appear after selection?
- Check browser console for callback errors
- Make sure you're selecting photos (not albums)

---

## 📝 Next Steps

After photos are selected, you can:
1. Send them to a recipe API for analysis
2. Use AI/ML to detect food items
3. Generate recipe suggestions
4. Tag photos with recipe metadata

---

## 🔒 Security Note

The API key is safe to expose in client-side code when properly restricted to:
- Specific APIs (Picker API, Photos API)
- Specific domains (your production URL)

For production, add your domain to the API key restrictions!


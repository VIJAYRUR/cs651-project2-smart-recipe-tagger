# Quick Start Guide

## 🎯 What You Have Now

A fully functional React web application with:
- ✅ Google Authentication (Sign in with Google)
- ✅ Google Photos Integration
- ✅ Photo Gallery with selection capability
- ✅ Bootstrap UI styling
- ✅ Protected routes

## 🚀 Next Steps to Get Running

### Step 1: Firebase Setup (5 minutes)

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com/
   - Click "Add project"
   - Name it "Smart Recipe Tagger" (or your choice)
   - Disable Google Analytics (optional)
   - Click "Create project"

2. **Add Web App**
   - Click the web icon `</>` 
   - Register app nickname: "Smart Recipe Tagger Web"
   - Copy the `firebaseConfig` object

3. **Enable Google Sign-In**
   - Go to Authentication → Get Started
   - Click "Sign-in method" tab
   - Enable "Google"
   - Click Save

4. **Update Your Code**
   - Open `client/src/config/firebase.js`
   - Replace the placeholder values with your Firebase config

### Step 2: Google Cloud Setup (10 minutes)

1. **Enable Google Photos API**
   - Go to https://console.cloud.google.com/
   - Select your Firebase project from dropdown
   - Go to "APIs & Services" → "Library"
   - Search "Photos Library API"
   - Click "Enable"

2. **Configure OAuth Consent**
   - Go to "APIs & Services" → "OAuth consent screen"
   - Choose "External"
   - Fill in:
     - App name: Smart Recipe Tagger
     - User support email: your email
     - Developer contact: your email
   - Click "Save and Continue"
   - Click "Add or Remove Scopes"
   - Add these scopes:
     - `https://www.googleapis.com/auth/photoslibrary.readonly`
     - `https://www.googleapis.com/auth/userinfo.profile`
     - `https://www.googleapis.com/auth/userinfo.email`
   - Click "Save and Continue"
   - Add test users (your email)
   - Click "Save and Continue"

3. **Create OAuth Client**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Application type: "Web application"
   - Name: "Smart Recipe Tagger Web Client"
   - Authorized JavaScript origins:
     - Add: `http://localhost:5173`
   - Authorized redirect URIs:
     - Add: `http://localhost:5173`
     - Add: `https://YOUR_PROJECT_ID.firebaseapp.com` (replace with your Firebase project ID)
   - Click "Create"
   - Copy the Client ID

4. **Link to Firebase**
   - Go back to Firebase Console
   - Authentication → Sign-in method → Google
   - Expand "Web SDK configuration"
   - Paste your OAuth Client ID
   - Click Save

### Step 3: Run the App (1 minute)

```bash
cd client
npm run dev
```

Open http://localhost:5173 in your browser!

## 🎉 Testing the App

1. Click "Sign in with Google"
2. Choose your Google account
3. Grant permissions for:
   - View your email address
   - View your basic profile info
   - View your Google Photos library
4. You should see your Google Photos!
5. Click on photos to select them
6. Click "Get Recipes" button (placeholder for now)

## 🐛 Troubleshooting

### "Failed to fetch photos"
- Make sure you granted Google Photos permission during sign-in
- Check that Photos Library API is enabled
- Verify OAuth scopes include `photoslibrary.readonly`

### "Popup blocked" or "Redirect error"
- Check authorized domains in Firebase Console
- Verify OAuth redirect URIs in Google Cloud Console
- Make sure you're using `http://localhost:5173` (not 127.0.0.1)

### "Configuration error"
- Double-check Firebase config in `client/src/config/firebase.js`
- Ensure all values are copied correctly (no extra quotes or spaces)

## 📚 What's Next?

The foundation is complete! Here's what you can add next:

1. **Recipe Recognition** - Integrate an AI/ML API to identify food in images
2. **Recipe Database** - Store and retrieve recipe information
3. **User Collections** - Save favorite recipes
4. **Analytics** - Track usage and popular recipes
5. **Sharing** - Share recipes with friends

## 📖 Documentation

- Full setup guide: `client/SETUP.md`
- Project README: `README.md`
- Firebase docs: https://firebase.google.com/docs
- Google Photos API: https://developers.google.com/photos

## 💡 Tips

- Use Chrome DevTools to debug authentication issues
- Check browser console for error messages
- Firebase Console has useful debugging tools
- Test with a Google account that has photos

---

**Need help?** Check the detailed setup guide in `client/SETUP.md`


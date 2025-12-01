# Google Cloud Console Setup Checklist

Use this checklist to ensure your Google Cloud project is properly configured.

## ✅ Step 1: Enable Google Photos Library API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select project: **finalproject-ws**
3. Navigate to: **APIs & Services** → **Library**
4. Search for: **"Photos Library API"**
5. Click **Enable**

**Status**: [ ] Complete

---

## ✅ Step 2: Configure OAuth Consent Screen

1. Go to: **APIs & Services** → **OAuth consent screen**
2. User Type: **External** (should already be selected)
3. Click **Edit App**

### App Information
- **App name**: Smart Recipe Tagger (or your choice)
- **User support email**: Your email
- **App logo**: (optional)
- **App domain**: (optional for testing)
- **Authorized domains**: finalproject-ws.firebaseapp.com
- **Developer contact**: Your email

Click **Save and Continue**

### Scopes
Click **Add or Remove Scopes** and add these:

**Required Scopes:**
- [ ] `https://www.googleapis.com/auth/photoslibrary.readonly`
  - Description: "View your Google Photos library"
  
- [ ] `https://www.googleapis.com/auth/userinfo.profile`
  - Description: "See your personal info"
  
- [ ] `https://www.googleapis.com/auth/userinfo.email`
  - Description: "See your email address"

Click **Update** → **Save and Continue**

### Test Users
Add your email address(es) as test users:
- [ ] Your primary email
- [ ] Any other test accounts

Click **Save and Continue**

**Status**: [ ] Complete

---

## ✅ Step 3: Configure OAuth Client

1. Go to: **APIs & Services** → **Credentials**
2. Find your OAuth 2.0 Client ID (should already exist)
3. Click the **Edit** icon (pencil)

### Authorized JavaScript Origins
Add these URLs:
- [ ] `http://localhost:5173`
- [ ] `http://localhost:5174`
- [ ] `https://finalproject-ws.firebaseapp.com`

### Authorized Redirect URIs
Add these URLs:
- [ ] `http://localhost:5173`
- [ ] `http://localhost:5174`
- [ ] `https://finalproject-ws.firebaseapp.com`
- [ ] `https://finalproject-ws.firebaseapp.com/__/auth/handler`

Click **Save**

**Status**: [ ] Complete

---

## ✅ Step 4: Link OAuth to Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **finalproject-ws**
3. Go to: **Authentication** → **Sign-in method**
4. Click on **Google** provider
5. Expand **Web SDK configuration**
6. Paste your OAuth Client ID:
   ```
   1025290067260-t6nbaohld4th446h6mpoivlr.apps.googleusercontent.com
   ```
7. Click **Save**

**Status**: [ ] Complete

---

## ✅ Step 5: Verify Firebase Authentication

1. In Firebase Console: **Authentication** → **Sign-in method**
2. Verify **Google** is **Enabled**
3. Check **Authorized domains** includes:
   - [ ] localhost
   - [ ] finalproject-ws.firebaseapp.com

**Status**: [ ] Complete

---

## 🧪 Testing Checklist

### Test Authentication Flow
1. [ ] Open http://localhost:5174
2. [ ] Click "Sign in with Google"
3. [ ] Google sign-in popup appears
4. [ ] Can select Google account
5. [ ] Permission screen shows:
   - [ ] App name: Smart Recipe Tagger
   - [ ] Requested permissions visible
   - [ ] Can click "Allow"
6. [ ] Successfully redirected to /photos page
7. [ ] User name/email appears in navbar

### Test Google Photos Access
1. [ ] Photos load in gallery
2. [ ] Can see photo thumbnails
3. [ ] Can click to select photos
4. [ ] Selected photos show green border + checkmark
5. [ ] "Get Recipes" button shows count
6. [ ] No errors in browser console

### Test Logout
1. [ ] Click "Logout" button
2. [ ] Redirected to login page
3. [ ] Can sign in again

---

## 🐛 Common Issues & Solutions

### Issue: "Access blocked: This app's request is invalid"
**Solution**: 
- Make sure OAuth consent screen is configured
- Add your email as a test user
- Verify all required scopes are added

### Issue: "redirect_uri_mismatch"
**Solution**:
- Check authorized redirect URIs in OAuth client
- Make sure the exact URL (including port) is listed
- Add both http://localhost:5173 AND http://localhost:5174

### Issue: "Photos don't load"
**Solution**:
- Verify Photos Library API is enabled
- Check that photoslibrary.readonly scope is in OAuth consent
- Make sure you clicked "Allow" for photo access during sign-in
- Verify your Google account has photos

### Issue: "Invalid API key"
**Solution**:
- Check firebase.js has correct API key
- Verify Firebase project ID matches
- Try regenerating API key in Firebase Console

---

## 📋 Quick Reference

**Your Configuration:**
- **Firebase Project**: finalproject-ws
- **OAuth Client ID**: 1025290067260-t6nbaohld4th446h6mpoivlr.apps.googleusercontent.com
- **Dev Server**: http://localhost:5174
- **Firebase Hosting**: https://finalproject-ws.firebaseapp.com

**Important Links:**
- [Google Cloud Console](https://console.cloud.google.com/)
- [Firebase Console](https://console.firebase.google.com/)
- [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent)
- [API Library](https://console.cloud.google.com/apis/library)

---

## ✅ Final Verification

Before considering setup complete, verify:
- [ ] All checkboxes above are checked
- [ ] Can successfully sign in with Google
- [ ] Photos load in the gallery
- [ ] No console errors
- [ ] Can select photos and see "Get Recipes" button

**Setup Status**: [ ] COMPLETE

Once all items are checked, you're ready to develop the recipe recognition feature! 🎉


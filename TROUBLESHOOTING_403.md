# Fixing 403 Forbidden Error - Google Photos API

## Problem
You're seeing:
```
GET https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=50
403 (Forbidden)
Error fetching photos: Error: Failed to fetch photos
```

## Root Causes

### 1. Missing JavaScript Origin ❌
Your OAuth client is missing `http://localhost:5174`

### 2. OAuth Scopes Not Properly Configured
The Google Photos API scope might not be approved

## Solutions

### Fix 1: Add JavaScript Origin (CRITICAL)

1. In Google Cloud Console (the page you have open)
2. Under **"Authorized JavaScript origins"**
3. Click **"+ Add URI"**
4. Add: `http://localhost:5174`
5. Click **"Save"** at the bottom

### Fix 2: Verify OAuth Consent Screen Scopes

1. Go to: [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent)
2. Click **"Edit App"**
3. Click **"Save and Continue"** on App Information
4. On the **Scopes** page, verify these are added:

   **Required Scopes:**
   - `https://www.googleapis.com/auth/photoslibrary.readonly`
   - `https://www.googleapis.com/auth/userinfo.profile`
   - `https://www.googleapis.com/auth/userinfo.email`

5. If missing, click **"Add or Remove Scopes"**
6. Search for "Photos Library API"
7. Check the box for `.../auth/photoslibrary.readonly`
8. Click **"Update"**
9. Click **"Save and Continue"**

### Fix 3: Verify You're a Test User

1. Still in OAuth Consent Screen
2. Go to **"Test users"** section
3. Make sure your email is listed
4. If not, click **"+ Add Users"** and add your email

### Fix 4: Re-authenticate

After making the above changes:

1. **Logout** from your app (click Logout button)
2. **Clear browser cache** (or use Incognito/Private window)
3. **Sign in again**
4. **Grant all permissions** when prompted

## Step-by-Step Fix (Do This Now)

### Step 1: Add localhost:5174
```
Google Cloud Console → Credentials → Your OAuth Client
→ Authorized JavaScript origins
→ + Add URI
→ Type: http://localhost:5174
→ Save
```

### Step 2: Verify Scopes
```
Google Cloud Console → OAuth consent screen
→ Edit App
→ Scopes page
→ Verify photoslibrary.readonly is listed
→ If not, add it
→ Save
```

### Step 3: Test Again
```
1. Go to your app: http://localhost:5174
2. Click Logout (if signed in)
3. Clear browser cache (Cmd+Shift+Delete on Mac, Ctrl+Shift+Delete on Windows)
4. Sign in again
5. Grant ALL permissions when asked
```

## Expected Permission Screen

When you sign in, you should see:
```
Smart Recipe Tagger wants to:
✓ View your email address
✓ View your basic profile info
✓ View your Google Photos library
```

If you don't see "View your Google Photos library", the scope is not configured.

## Alternative: Use Incognito Mode

To test without clearing cache:
1. Open Incognito/Private window
2. Go to http://localhost:5174
3. Sign in
4. Grant permissions

## Verify API is Enabled

1. Go to: [API Library](https://console.cloud.google.com/apis/library)
2. Search: "Photos Library API"
3. Make sure it says **"API Enabled"**
4. If not, click **"Enable"**

## Check Access Token

After signing in, open browser console and type:
```javascript
localStorage
```

You should see Firebase auth data. If the access token doesn't have the right scopes, you need to re-authenticate.

## Still Not Working?

### Check Console Errors
Look for these specific errors:
- `CORS` errors → Add localhost:5174 to authorized origins
- `403 Forbidden` → Scope not granted or API not enabled
- `401 Unauthorized` → Token expired, sign in again

### Force Re-authentication

Add this temporarily to `AuthContext.jsx`:
```javascript
const signInWithGoogle = async () => {
  try {
    // Force account selection
    googleProvider.setCustomParameters({
      prompt: 'select_account consent'
    });
    const result = await signInWithPopup(auth, googleProvider);
    // ... rest of code
  }
}
```

This forces Google to show the permission screen again.

## Quick Checklist

- [ ] Added `http://localhost:5174` to Authorized JavaScript origins
- [ ] Verified Photos Library API is enabled
- [ ] Verified `photoslibrary.readonly` scope in OAuth consent screen
- [ ] Added yourself as test user
- [ ] Logged out and cleared cache
- [ ] Signed in again and granted all permissions
- [ ] Checked browser console for new errors

## After Fixing

You should see:
- ✅ No CORS errors
- ✅ No 403 errors
- ✅ Photos load in the gallery
- ✅ Success message in console

---

**Most Common Fix**: Just add `http://localhost:5174` to authorized JavaScript origins and re-authenticate!


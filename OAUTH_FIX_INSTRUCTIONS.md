# Fix Google Photos 403 Error - OAuth Configuration

## Problem
Firebase doesn't properly pass through Google Photos API scopes, causing 403 errors.

## Solution
Use Google OAuth directly instead of Firebase Authentication.

## Steps to Fix

### 1. Update Google Cloud Console

Go to: https://console.cloud.google.com/apis/credentials

1. Click on your OAuth 2.0 Client ID
2. Under "Authorized redirect URIs", add:
   - `http://localhost:5173` (for development)
   - Your production URL (e.g., `https://yourdomain.com`)
3. Click "Save"

### 2. Code Changes (Already Done)

The `AuthContext.jsx` has been updated to use Google OAuth directly.

### 3. Test the Fix

1. Clear your browser's localStorage:
   ```javascript
   localStorage.clear()
   ```

2. Refresh the page

3. Click "Sign in with Google"

4. You should see a consent screen asking for:
   - View your Google Photos library
   - View your email address
   - View your basic profile info

5. After granting permissions, you should be redirected back and logged in

### 4. Verify It Works

Check the console for:
- ✅ "Access token received from OAuth"
- ✅ "User data: ..."
- ✅ Photos should load without 403 errors

## What Changed

**Before (Firebase):**
- Used Firebase Authentication
- Firebase didn't properly request Google Photos scope
- Got 403 errors when accessing photos

**After (Direct OAuth):**
- Uses Google OAuth 2.0 directly
- Properly requests all required scopes
- Access token has correct permissions

## Troubleshooting

If you still get errors:

1. **Check redirect URI**: Make sure `http://localhost:5173` is in your Google Cloud Console
2. **Clear cache**: Clear browser cache and localStorage
3. **Check scopes**: In the consent screen, verify "View your Google Photos library" is listed
4. **Check token**: In console, verify access token is present after login

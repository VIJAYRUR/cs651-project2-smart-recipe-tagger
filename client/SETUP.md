# Smart Recipe Tagger - Setup Instructions

## Prerequisites
- Node.js (v20.19+ or v22.12+)
- Firebase account
- Google Cloud Console account

## Firebase Setup

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Once created, click on the web icon (</>) to add a web app
4. Register your app with a nickname (e.g., "Smart Recipe Tagger")
5. Copy the Firebase configuration object

### 2. Enable Google Authentication
1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Click on **Google** and enable it
3. Add your authorized domains if needed

### 3. Configure Firebase in the App
1. Open `client/src/config/firebase.js`
2. Replace the placeholder values with your Firebase configuration:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Google Photos API Setup

### 1. Enable Google Photos API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project (or create a new one)
3. Go to **APIs & Services** → **Library**
4. Search for "Photos Library API" and enable it

### 2. Configure OAuth Consent Screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose "External" user type
3. Fill in the required information:
   - App name: Smart Recipe Tagger
   - User support email: your email
   - Developer contact: your email
4. Add scopes:
   - `https://www.googleapis.com/auth/photoslibrary.readonly`
   - `https://www.googleapis.com/auth/userinfo.profile`
   - `https://www.googleapis.com/auth/userinfo.email`
5. Add test users (your email) if in testing mode

### 3. Create OAuth 2.0 Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth client ID**
3. Choose "Web application"
4. Add authorized JavaScript origins:
   - `http://localhost:5173` (for development)
   - Your production domain (when deployed)
5. Add authorized redirect URIs:
   - `http://localhost:5173` (for development)
   - Your Firebase Auth domain (e.g., `your-project.firebaseapp.com`)
6. Copy the Client ID

### 4. Link OAuth Client to Firebase
1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Click on Google provider
3. Expand "Web SDK configuration"
4. Paste your OAuth Client ID from Google Cloud Console
5. Save

## Running the Application

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Features

### Current Features
- ✅ Google Authentication
- ✅ Google Photos Integration
- ✅ Photo Gallery View
- ✅ Photo Selection

### Upcoming Features
- 🔄 Recipe Recognition (AI/ML integration)
- 🔄 Recipe Details Display
- 🔄 Save Recipes to Collection
- 🔄 Analytics Dashboard

## Troubleshooting

### "Failed to fetch photos" Error
- Make sure Google Photos Library API is enabled
- Verify OAuth scopes include `photoslibrary.readonly`
- Check that you've granted permissions during sign-in
- Ensure your Google account has photos in Google Photos

### Authentication Issues
- Verify Firebase configuration is correct
- Check that Google sign-in is enabled in Firebase Console
- Ensure authorized domains are configured
- Clear browser cache and cookies

### CORS Errors
- Make sure authorized JavaScript origins are configured in Google Cloud Console
- Check that redirect URIs match your application URL

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Login page with Google Sign-in
│   │   ├── Login.css
│   │   ├── PhotoGallery.jsx   # Photo gallery with selection
│   │   ├── PhotoGallery.css
│   │   └── ProtectedRoute.jsx # Route protection
│   ├── context/
│   │   └── AuthContext.jsx    # Authentication state management
│   ├── config/
│   │   └── firebase.js        # Firebase configuration
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # Entry point
└── package.json
```

## Next Steps
1. Complete Firebase and Google Cloud setup
2. Test authentication flow
3. Verify photo loading
4. Implement recipe recognition feature


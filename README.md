# Smart Recipe Tagger

A web application that allows users to sign in with Google, connect to their Google Photos, and discover recipes from food images using AI.

## 🚀 Features

### Current Features
- ✅ **Google Authentication** - Secure sign-in with Google account
- ✅ **Google Photos Integration** - Access and view your Google Photos library
- ✅ **Photo Gallery** - Beautiful, responsive photo gallery with Bootstrap
- ✅ **Photo Selection** - Select multiple food images for recipe analysis

### Upcoming Features
- 🔄 **AI Recipe Recognition** - Identify food items and suggest recipes
- 🔄 **Recipe Details** - View detailed recipe information
- 🔄 **Save to Collection** - Save favorite recipes
- 🔄 **Analytics Dashboard** - Track your recipe discoveries

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **UI Framework**: Bootstrap 5 + React-Bootstrap
- **Authentication**: Firebase Authentication
- **API Integration**: Google Photos Library API
- **Routing**: React Router v6

## 📋 Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm or yarn
- Firebase account
- Google Cloud Console account

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd cs651-project2-smart-recipe-tagger
```

### 2. Install Dependencies
```bash
cd client
npm install
```

### 3. Firebase Configuration

See detailed setup instructions in [client/SETUP.md](client/SETUP.md)

**Quick steps:**
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Authentication
3. Copy your Firebase config to `client/src/config/firebase.js`

### 4. Google Photos API Setup

1. Enable Google Photos Library API in [Google Cloud Console](https://console.cloud.google.com/)
2. Configure OAuth consent screen
3. Add required scopes:
   - `https://www.googleapis.com/auth/photoslibrary.readonly`
   - `https://www.googleapis.com/auth/userinfo.profile`
   - `https://www.googleapis.com/auth/userinfo.email`

### 5. Run the Application
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📁 Project Structure

```
cs651-project2-smart-recipe-tagger/
├── client/                      # React frontend application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Login.jsx        # Google sign-in page
│   │   │   ├── PhotoGallery.jsx # Photo gallery with selection
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication state
│   │   ├── config/
│   │   │   └── firebase.js      # Firebase configuration
│   │   ├── App.jsx              # Main app component
│   │   └── main.jsx             # Entry point
│   ├── SETUP.md                 # Detailed setup guide
│   └── package.json
├── Mockups/                     # UI mockups
├── Proposal/                    # Project proposal
└── System_Design/               # System design diagrams
```

## 🎨 Screenshots

Check the `Mockups/` folder for UI designs:
- Login page
- Photo gallery
- Recipe detail view
- Analytics dashboard

## 🔐 Environment Variables

Create a `.env` file in the `client/` directory (use `.env.example` as template):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚧 Development Roadmap

- [x] Project setup and structure
- [x] Google Authentication
- [x] Google Photos integration
- [x] Photo gallery UI
- [ ] AI/ML recipe recognition
- [ ] Recipe database integration
- [ ] User recipe collections
- [ ] Analytics and insights
- [ ] Mobile responsive design improvements

## 📝 License

This project is part of CS651 coursework.

## 👥 Contributors

- Your Name

## 🤝 Contributing

This is a course project. For suggestions or issues, please open an issue in the repository.


import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR09e4D2RflvqPZcz51d2fkpB8dgzO3DA",
  authDomain: "finalproject-ws.firebaseapp.com",
  projectId: "finalproject-ws",
  storageBucket: "finalproject-ws.firebasestorage.app",
  messagingSenderId: "1025290067260",
  appId: "1:1025290067260:web:cbb5999244e9a23de0d239",
  measurementId: "G-RQ0LXJY0T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
export const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Add scopes for Google user info (Photos access now uses OAuth in AuthContext)
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

export default app;


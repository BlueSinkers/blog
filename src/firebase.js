// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqk2qtGuaJBQo-MkWiVleJAwJ2CuuKkoo",
  authDomain: "blog-authentication-74b5f.firebaseapp.com",
  projectId: "blog-authentication-74b5f",
  storageBucket: "blog-authentication-74b5f.appspot.com",
  messagingSenderId: "865118855182",
  appId: "1:865118855182:web:e45cc817261aca6b55dc5f",
  measurementId: "G-0114Z8K17Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Authentication
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider(); // Initialize the Google provider

export { auth, provider, signInWithPopup, signOut }; // Export auth, provider, and signInWithPopup
export default app; // Export the app instance if needed

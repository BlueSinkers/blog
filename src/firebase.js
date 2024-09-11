// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { isSupported, getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Analytics (only in the browser)
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      getAnalytics(app);
    } else {
      console.log("Firebase Analytics is not supported in this environment.");
    }
  }).catch(err => console.error("Analytics initialization failed", err));
}

export { auth, provider, signInWithPopup, signOut };
export default app;

// Import Bootstrap, jQuery, and Popper.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import Popper from '@popperjs/core';

// Add Font Awesome CDN link
export const onClientEntry = () => {
  // Dynamically add the Font Awesome link to the document head
  const link = document.createElement('link');
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Check if the window object is defined (i.e., we're in the browser)
  if (typeof window !== 'undefined') {
    // Import Firebase functions dynamically to ensure they are only loaded in the browser
    import('firebase/app').then(({ initializeApp }) => {
      import('firebase/auth').then(({ getAuth, GoogleAuthProvider, signInWithPopup, signOut }) => {
        import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
          // Your Firebase configuration
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

          // Initialize analytics if it's supported
          isSupported().then(supported => {
            if (supported) {
              getAnalytics(app);
            } else {
              console.log("Firebase Analytics not supported in this environment.");
            }
          });

          // Make sure the authentication and provider are accessible globally
          window.firebaseAuth = auth;
          window.firebaseProvider = provider;
          window.signInWithPopup = signInWithPopup;
          window.signOut = signOut;
        });
      });
    });
  }
};

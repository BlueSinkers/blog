import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import googleLogo from '../images/google.svg'; // Adjust path as needed
import './login.modules.css';  // Import the CSS file for styling

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <button onClick={handleLogin} className="google-login-button">
       
      <img  
        src={googleLogo} 
        alt="Google G" 
        className="google-logo" 
      />
       Login
    </button>
  );
};

export default Login;

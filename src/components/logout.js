import React from 'react';
import { signOut } from 'firebase/auth';  // Make sure you're importing from 'firebase/auth'
import { auth } from '../firebase';       // Import the 'auth' instance from your firebase.js

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);   // Use 'auth' from your firebase.js
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

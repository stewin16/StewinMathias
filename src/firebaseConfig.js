// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALeE15alTyshxM0Hk_G1J4g5W_kw6qN1A",
  authDomain: "portfolio-694f0.firebaseapp.com",
  databaseURL: "https://portfolio-694f0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-694f0",
  storageBucket: "portfolio-694f0.firebasestorage.app",
  messagingSenderId: "581094817302",
  appId: "1:581094817302:web:a02ed9986f1e9da3333f37",
  measurementId: "G-NXKCH04J9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
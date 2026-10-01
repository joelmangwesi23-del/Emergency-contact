// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA1BVD5EX-5Ch4W9rBEb-0ppQSddwgkSo",
  authDomain: "emmergency-connect-app.firebaseapp.com",
  projectId: "emmergency-connect-app",
  storageBucket: "emmergency-connect-app.firebasestorage.app",
  messagingSenderId: "467277888915",
  appId: "1:467277888915:web:e4ffae936aeee5b0d03c66",
  measurementId: "G-TXRPCEVC46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
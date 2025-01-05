// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6giI80x9KIobzAf7GaNsNBmXHF7OfZIo",
  authDomain: "finance-dashboard81.firebaseapp.com",
  projectId: "finance-dashboard81",
  storageBucket: "finance-dashboard81.firebasestorage.app",
  messagingSenderId: "56981606158",
  appId: "1:56981606158:web:ffc85ee613304f552fd15f",
  measurementId: "G-2ZH18RH75T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
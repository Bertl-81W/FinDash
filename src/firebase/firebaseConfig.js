import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD1Jihf6gfR9m1A1VfWdy9PumblQ6BcT5Q",
  authDomain: "gi-joe-tracker.firebaseapp.com",
  projectId: "gi-joe-tracker",
  storageBucket: "gi-joe-tracker.firebasestorage.app",
  messagingSenderId: "653581820292",
  appId: "1:653581820292:web:5adc980c1513350244fdd1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };


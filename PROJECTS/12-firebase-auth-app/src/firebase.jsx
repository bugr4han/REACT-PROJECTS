import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ← Firestore ekle

const firebaseConfig = {
  apiKey: "AIzaSyD-8lCKumchM49j9rBoevVhK0qk9NB2YgY",
  authDomain: "fir-app-a5c5f.firebaseapp.com",
  projectId: "fir-app-a5c5f",
  storageBucket: "fir-app-a5c5f.firebasestorage.app",
  messagingSenderId: "378870195426",
  appId: "1:378870195426:web:57acf09a198f545a196abb",
};

// Firebase app başlat
export const app = initializeApp(firebaseConfig);

// Auth ve Firestore export et
export const auth = getAuth(app);
export const db = getFirestore(app); // ← Firestore export

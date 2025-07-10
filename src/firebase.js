import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4E4-6rN-6y3pUnNBBi744FE4LtG8_NhU",
  authDomain: "annstory-ab3fd.firebaseapp.com",
  projectId: "annstory-ab3fd",
  storageBucket: "annstory-ab3fd.firebasestorage.app",
  messagingSenderId: "31415504747",
  appId: "1:31415504747:web:9383b77a6b13a2a6eb462e",
  measurementId: "G-NS0D75CE4B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

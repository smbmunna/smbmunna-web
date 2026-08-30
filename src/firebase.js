// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADMgx_ICz-mXGoLoIruYXppuuUYvo-Mqg",
  authDomain: "smb-portfolio-47794.firebaseapp.com",
  projectId: "smb-portfolio-47794",
  storageBucket: "smb-portfolio-47794.firebasestorage.app",
  messagingSenderId: "343597172479",
  appId: "1:343597172479:web:6c54453f864e989440aeca",
  measurementId: "G-GNX1DEPSKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
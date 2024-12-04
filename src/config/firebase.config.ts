// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVPFI0nnXKXClz_YszdP3KWMVWBjPNmw",
  authDomain: "incendiar-ecommerce.firebaseapp.com",
  projectId: "incendiar-ecommerce",
  storageBucket: "incendiar-ecommerce.firebasestorage.app",
  messagingSenderId: "751722126859",
  appId: "1:751722126859:web:eae249958259330f75710e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
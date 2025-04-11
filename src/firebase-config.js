// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZIUZnALXaHyi5N-Ly6tOyLB5ZoibvRVg",
  authDomain: "chatapp-fba01.firebaseapp.com",
  projectId: "chatapp-fba01",
  storageBucket: "chatapp-fba01.firebasestorage.app",
  messagingSenderId: "177554975291",
  appId: "1:177554975291:web:6653cbdd303dff7d5f8a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
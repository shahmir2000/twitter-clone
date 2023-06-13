// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSBNIuUxwV-ihWig2TPWAp7OYdokFS1II",
  authDomain: "twitter-app-3e94a.firebaseapp.com",
  projectId: "twitter-app-3e94a",
  storageBucket: "twitter-app-3e94a.appspot.com",
  messagingSenderId: "372155809192",
  appId: "1:372155809192:web:8ba0aeb05b45b9e048b19d",
  measurementId: "G-77G54XF4XV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

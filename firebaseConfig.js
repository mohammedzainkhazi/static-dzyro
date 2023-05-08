// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBISP3Mv3aCSgbB7rqSHm8Ph-68SuZYPEk",
  authDomain: "thedzyro.firebaseapp.com",
  projectId: "thedzyro",
  storageBucket: "thedzyro.appspot.com",
  messagingSenderId: "697066209883",
  appId: "1:697066209883:web:a5424846fb2ed00efdb57e",
  measurementId: "G-Q6T5H7KX7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
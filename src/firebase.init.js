// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOngB1qTvge2Oda7vpN4XGCEi_-qA7GqU",
  authDomain: "dashboard-assignment-488b5.firebaseapp.com",
  projectId: "dashboard-assignment-488b5",
  storageBucket: "dashboard-assignment-488b5.appspot.com",
  messagingSenderId: "284641097670",
  appId: "1:284641097670:web:fec2719f08461dc59424c7",
  measurementId: "G-KL5LCYR01F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ozqMuWsGirQv1KrfGwxhnk31JRvYr2Y",
  authDomain: "netflix-gpt-bbde1.firebaseapp.com",
  projectId: "netflix-gpt-bbde1",
  storageBucket: "netflix-gpt-bbde1.appspot.com",
  messagingSenderId: "1024670761284",
  appId: "1:1024670761284:web:b9238c2130174ebc97d711",
  measurementId: "G-MM0CVFYCE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
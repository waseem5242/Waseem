// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbjQUuIrf--gitYLc_Ic6fRO_2f_tmr18",
  authDomain: "fir-782f9.firebaseapp.com",
  projectId: "fir-782f9",
  storageBucket: "fir-782f9.appspot.com",
  messagingSenderId: "688069541202",
  appId: "1:688069541202:web:95d8e133ffad9bed278e8b",
  measurementId: "G-K7RGLTYPFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
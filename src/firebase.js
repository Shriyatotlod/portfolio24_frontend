import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF9Dq9YMBibopsW05tt1RFY66h81XCWc0",
  authDomain: "react-portfolio-efb1b.firebaseapp.com",
  projectId: "react-portfolio-efb1b",
  storageBucket: "react-portfolio-efb1b.appspot.com",
  messagingSenderId: "300115202688",
  appId: "1:300115202688:web:f4e288240c3389593a4c65",
  measurementId: "G-B03VG58YQ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
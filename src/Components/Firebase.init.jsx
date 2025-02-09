// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIRa_XotRisHe5FEkQPa-92kewZvORLac",
  authDomain: "firstproject-a9ab5.firebaseapp.com",
  projectId: "firstproject-a9ab5",
  storageBucket: "firstproject-a9ab5.firebasestorage.app",
  messagingSenderId: "376155615689",
  appId: "1:376155615689:web:c17bdb62b750ff2da3b818",
  measurementId: "G-RKEHXGW7CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth
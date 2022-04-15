import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_KTHRbzDr3gwlZG_mIEMTepGNQmJ0EZ0",
    authDomain: "travel-10d48.firebaseapp.com",
    projectId: "travel-10d48",
    storageBucket: "travel-10d48.appspot.com",
    messagingSenderId: "720308580168",
    appId: "1:720308580168:web:5411d9ed18548d2b41cd7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
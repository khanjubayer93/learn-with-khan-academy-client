// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeksDpiztFvgoomZhDqCU6VHH8bd3jqJM",
    authDomain: "learn-with-khan-academy.firebaseapp.com",
    projectId: "learn-with-khan-academy",
    storageBucket: "learn-with-khan-academy.appspot.com",
    messagingSenderId: "486573599638",
    appId: "1:486573599638:web:299140248bce63497c0bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
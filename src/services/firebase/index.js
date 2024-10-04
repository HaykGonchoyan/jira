// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWE1halVAmIbewRhQ1wWYGjiAxx7EC6SY",
  authDomain: "farwardto-f00a1.firebaseapp.com",
  databaseURL: "https://farwardto-f00a1-default-rtdb.firebaseio.com",
  projectId: "farwardto-f00a1",
  storageBucket: "farwardto-f00a1.appspot.com",
  messagingSenderId: "436150927341",
  appId: "1:436150927341:web:892239da30df982507f1e4",
  measurementId: "G-RTMT7V8CR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {
    auth
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyDrN53ml2EVks4irQ46NyatQYYeAUhnCN4",
  authDomain:"projeto-micronegocio",
  projectId:"projeto-micronegocio.firebasestorage.app",
  storageBucket:"projeto-micronegocio.firebasestorage.app",
  messagingSenderId:"1089524937822",
  appId:"1:1089524937822:web:20f1528b5b1de4a43f30cf",
  measurementId: "G-Y8Q8SEYFSH"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
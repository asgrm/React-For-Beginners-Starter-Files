import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCa6LSWdjvZ1wCei09hwV4t5ZEbJ3JoOKg",
  authDomain: "catch-of-the-day-by-asgrm.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-by-asgrm-default-rtdb.firebaseio.com",
  // projectId: "catch-of-the-day-by-asgrm",
  // storageBucket: "catch-of-the-day-by-asgrm.appspot.com",
  // messagingSenderId: "429555282827",
  // appId: "1:429555282827:web:a25998413403abf632358e",
  // measurementId: "G-4KBEBS3YTY"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

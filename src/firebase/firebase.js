import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt-0SImwRZMtuekkeV0nh02daj9zmyK0o",
  authDomain: "clone-79319.firebaseapp.com",
  projectId: "clone-79319",
  storageBucket: "clone-79319.appspot.com",
  messagingSenderId: "540505014177",
  appId: "1:540505014177:web:1e109e5a344afa453555e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
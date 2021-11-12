import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZB7vvtIaD3gnQvu1FXSP_sNyJ1vV-9Sc",
  authDomain: "disney-clone-22aa5.firebaseapp.com",
  projectId: "disney-clone-22aa5",
  storageBucket: "disney-clone-22aa5.appspot.com",
  messagingSenderId: "1076271679150",
  appId: "1:1076271679150:web:ef81e3d8bfd98e29e30f3f",
  measurementId: "G-2XSZ60BBQL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

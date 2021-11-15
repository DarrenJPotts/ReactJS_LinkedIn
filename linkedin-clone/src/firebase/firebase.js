import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqWopbQ3E7DFH_Uc-m10_gxyKVi0Bm5qU",
  authDomain: "linkedin-clone-d9975.firebaseapp.com",
  projectId: "linkedin-clone-d9975",
  storageBucket: "linkedin-clone-d9975.appspot.com",
  messagingSenderId: "89698329330",
  appId: "1:89698329330:web:ef94191ce671db9d74266b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

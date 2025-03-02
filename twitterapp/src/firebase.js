import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC6Bmi_D1SbUDeAZVCd6vaQ91UpkIm0UgU",
  authDomain: "twitterapp-1ccca.firebaseapp.com",
  projectId: "twitterapp-1ccca",
  storageBucket: "twitterapp-1ccca.firebasestorage.app",
  messagingSenderId: "810172448502",
  appId: "1:810172448502:web:ede098f509b1a6c3f936d7",
  measurementId: "G-F9C6CR0569"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAv1dnKV0CX-riQ_AZ2Qac-nIyCZyuYQ-Q",
    authDomain: "lifedev-miranda.firebaseapp.com",
    projectId: "lifedev-miranda",
    storageBucket: "lifedev-miranda.firebasestorage.app",
    messagingSenderId: "729306882618",
    appId: "1:729306882618:web:5b96941431d84096280b03",
    measurementId: "G-XD08D4JP8P"
  };

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
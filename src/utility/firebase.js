
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2kA3ugFNaNYAA_Psw0ttJEUSvJ8Iv3-U",
  authDomain: "ntfx-auth.firebaseapp.com",
  projectId: "ntfx-auth",
  storageBucket: "ntfx-auth.appspot.com",
  messagingSenderId: "751371901268",
  appId: "1:751371901268:web:272e0605b53865f9fd90c1"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);
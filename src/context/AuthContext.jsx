import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc, getDoc } from 'firebase/firestore';


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  async function signUp(email, password, fullName, address, location) {
    await createUserWithEmailAndPassword(auth, email, password);
    const userDocRef = doc(db, 'users', email);
    await setDoc(userDocRef, {
      fullName: fullName,
      address: address,
      location: location,
    });
  }
  
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
  
      if (currentUser) {
     
        const userDocRef = doc(db, 'users', currentUser.email);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          setUserData(snapshot.data());
        }
      } else {
 
        setUserData(null);
      }
    });
  
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function userAuth() {
  return useContext(AuthContext);
}
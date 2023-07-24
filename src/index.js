import React from 'react'
import { useEffect, useState,useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import ReactDOM from 'react-dom'

import './style.css'
import Profile from './views/profile'
import SignInSignUp from './views/sign-in-sign-up'
import Home from './views/home'
import Engagements from './views/engagements'
import Chats from './views/chats'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnhsqKvc3UJ8KCvMN_5lH7H7d0S_58Dkc",
  authDomain: "tinada-21c40.firebaseapp.com",
  projectId: "tinada-21c40",
  storageBucket: "tinada-21c40.appspot.com",
  messagingSenderId: "137253891232",
  appId: "1:137253891232:web:12c61f07ccea2923ec6dc5",
  measurementId: "G-KWB9TTE1ZG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { auth, db, app };


//user context for user state management
import { UserContext } from './UserContext';

const App = () => {
  const [user, setUser] = useState(null);


 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser({
          ...user,
        });
        console.log(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{user,
      setUser}}>

    <Router>
      <div>
        <Route component={Profile} exact path="/profile" />
        <Route component={SignInSignUp} exact path="/sign-in-sign-up" />
        <Route component={Home} exact path="/" />
        <Route component={Engagements} exact path="/engagements" />
        <Route component={Chats} exact path="/chats" />
      </div>
    </Router>
    </UserContext.Provider >
 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

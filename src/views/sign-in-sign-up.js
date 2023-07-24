import React, {useState,useContext} from 'react'

import { Redirect } from 'react-router-dom';



import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './sign-in-sign-up.css'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth,db,app} from '../index'

import { UserContext } from '../UserContext';
const SignInSignUp = (props) => {

  const [password, setPassword] = useState('');
const [emailAddress, setEmailAddress] = useState('');
const {setUser,user} = useContext(UserContext);


let handleSignIn = (e) => {

  e.preventDefault();
  signInWithEmailAndPassword(auth, emailAddress, password)
  .then((userCredential) => {
    // Signed in 
    const u = userCredential.user;
    // ...
    console.log(u)
    setUser(u);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

let handleSignUp = (e) => {

  e.preventDefault();
  
  console.log(emailAddress,password)

  createUserWithEmailAndPassword(auth, emailAddress, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // 
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

if (user) {
  return <Redirect to="/profile" />;
}

  return (
    <div className="sign-in-sign-up-container">
      <Helmet>
        <title>SignInSignUp - Tinada V1</title>
        <meta property="og:title" content="SignInSignUp - Tinada V1" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>

      <div className="sign-in-sign-up-container1">
        <h1 className="sign-in-sign-up-text">Sign In</h1>
        <div className="sign-in-sign-up-hero">
          <section className="sign-in-sign-up-sign-in-card">
            <main className="sign-in-sign-up-header-section"></main>
            <div className="sign-in-sign-up-sign-in-title">
              <h1 className="sign-in-sign-up-header">Sign In</h1>
            </div>
            <div className="sign-in-sign-up-sign-in-providers">
              <div className="sign-in-sign-up-facebook-container">
                <button className="sign-in-sign-up-facebook Content button">
                  Button
                </button>
              </div>
              <div className="sign-in-sign-up-google-container">
                <button className="sign-in-sign-up-google Content button">
                  Button
                </button>
              </div>
              <div className="sign-in-sign-up-linked-in-container">
                <button className="sign-in-sign-up-apple Content button">
                  Button
                </button>
              </div>
            </div>
            <form className="sign-in-sign-up-form" onSubmit={handleSignIn}>
              <div className="sign-in-sign-up-container2">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="sign-in-sign-up-input input"
                  name="emailAddress"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="sign-in-sign-up-container3">
                <input
                  type="text"
                  placeholder="Password"
                  className="sign-in-sign-up-input1 input"
                  name-="password"
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="sign-in-sign-up-link"
              >
                Forgot your password?
              </a>
              <div className="sign-in-sign-up-sign-in-provider">
                <button className="sign-in-sign-up-button Content button">
                  Sign In
                </button>
              </div>
            </form>
          </section>
          <section className="sign-in-sign-up-sign-up-card">
            <form onSubmit={handleSignUp}>
            <div className="sign-in-sign-up-sign-in-title1">
              <h1 className="sign-in-sign-up-header1">Sign Up</h1>
            </div>
            <div className="sign-in-sign-up-sign-in-providers1">
              <div className="sign-in-sign-up-facebook-container1">
                <button className="sign-in-sign-up-facebook1 Content button">
                  Button
                </button>
              </div>
              <div className="sign-in-sign-up-google-container1">
                <button className="sign-in-sign-up-google1 button Content">
                  Button
                </button>
              </div>
              <div className="sign-in-sign-up-linked-in-container1">
                <button className="sign-in-sign-up-apple1 Content button">
                  Button
                </button>
              </div>
            </div>
            <div className="sign-in-sign-up-container4">
              <input
                type="text"
                placeholder="Email Address"
                className="sign-in-sign-up-input2 input"
                name="emailAddress"
                onChange={(e) => setEmailAddress(e.target.value)}

              />
            </div>
            <div className="sign-in-sign-up-container5">
              <input
                type="text"
                placeholder="Password"
                className="sign-in-sign-up-input3 input"
                name="password"
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>
            <div className="sign-in-sign-up-sign-in-provider1">
              <button className="sign-in-sign-up-button1 Content button" >
                Sign Up
              </button>
            </div>
            </form>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default SignInSignUp

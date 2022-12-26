import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './sign-in-sign-up.css'

const SignInSignUp = (props) => {
  return (
    <div className="sign-in-sign-up-container">
      <Helmet>
        <title>SignInSignUp - Tinada V1</title>
        <meta property="og:title" content="SignInSignUp - Tinada V1" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="sign-in-sign-up-div">
        <DangerousHTML
          html={`<div class="container">
  <div class="switches-container">
    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
    <label for="switchMonthly">Sign Up</label>
    <label for="switchYearly">Sign In</label>
    <div class="switch-wrapper">
      <div class="switch">
        <div>Sign Up</div>
        <div>Sign In</div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
}
:root {
    --switches-bg-color: #ff7764;
    --switches-label-color: white ;
    --switch-bg-color: white;
    --switch-text-color: #ff7764 ;
}

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

/* resize font-size on html and body level. html is required for widths based on rem */
@media screen and (min-width: 1024px) {

    html,
    body {
        font-size: 24px;
    }
}

@media screen and (max-width: 1024px) {

    html,
    body {
        font-size: 16px;
    }
}

@media screen and (max-width: 600px) {

    html,
    body {
        font-size: 12px;
    }
}

/* a container - decorative, not required */
.container {
    border: 1px solid plum;
    width: 20rem;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}
/* p - decorative, not required */
p {
  margin-top:2rem;
  font-size:0.75rem;
  text-align:center;
}

/* container for all of the switch elements 
    - adjust "width" to fit the content accordingly 
*/
.switches-container {
    width: 16rem;
    position: relative;
    display: flex;
    padding: 0;
    position: relative;
    background: var(--switches-bg-color);
    line-height: 3rem;
    border-radius: 3rem;
    margin-left: auto;
    margin-right: auto;
}

/* input (radio) for toggling. hidden - use labels for clicking on */
.switches-container input {
    visibility: hidden;
    position: absolute;
    top: 0;
}

/* labels for the input (radio) boxes - something to click on */
.switches-container label {
    width: 50%;
    padding: 0;
    margin: 0;
    text-align: center;
    cursor: pointer;
    color: var(--switches-label-color);
}

/* switch highlighters wrapper (sliding left / right) 
    - need wrapper to enable the even margins around the highlight box
*/
.switch-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    padding: 0.15rem;
    z-index: 3;
    transition: transform .5s cubic-bezier(.77, 0, .175, 1);
    /* transition: transform 1s; */
}

/* switch box highlighter */
.switch {
    border-radius: 3rem;
    background: var(--switch-bg-color);
    height: 100%;
}

/* switch box labels
    - default setup
    - toggle afterwards based on radio:checked status 
*/
.switch div {
    width: 100%;
    text-align: center;
    opacity: 0;
    display: block;
    color: var(--switch-text-color) ;
    transition: opacity .2s cubic-bezier(.77, 0, .175, 1) .125s;
    will-change: opacity;
    position: absolute;
    top: 0;
    left: 0;
}

/* slide the switch box from right to left */
.switches-container input:nth-of-type(1):checked~.switch-wrapper {
    transform: translateX(0%);
}

/* slide the switch box from left to right */
.switches-container input:nth-of-type(2):checked~.switch-wrapper {
    transform: translateX(100%);
}

/* toggle the switch box labels - first checkbox:checked - show first switch div */
.switches-container input:nth-of-type(1):checked~.switch-wrapper .switch div:nth-of-type(1) {
    opacity: 1;
}

/* toggle the switch box labels - second checkbox:checked - show second switch div */
.switches-container input:nth-of-type(2):checked~.switch-wrapper .switch div:nth-of-type(2) {
    opacity: 1;
}
</style>`}
        ></DangerousHTML>
      </div>
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
            <form className="sign-in-sign-up-form">
              <div className="sign-in-sign-up-container2">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="sign-in-sign-up-input input"
                />
              </div>
              <div className="sign-in-sign-up-container3">
                <input
                  type="text"
                  placeholder="Password"
                  className="sign-in-sign-up-input1 input"
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
              />
            </div>
            <div className="sign-in-sign-up-container5">
              <input
                type="text"
                placeholder="Password"
                className="sign-in-sign-up-input3 input"
              />
            </div>
            <div className="sign-in-sign-up-sign-in-provider1">
              <button className="sign-in-sign-up-button1 Content button">
                Sign Up
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default SignInSignUp

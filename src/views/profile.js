import React from 'react'
import{db} from '../index'

// Initialize Cloud Firestore and get a reference to the service


import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Tinada V1</title>
        <meta property="og:title" content="Profile - Tinada V1" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="profile-container1">
        <Sidebar></Sidebar>
        <div className="profile-container2">
          <h1 className="profile-text">About Me</h1>
          <section className="profile-activity-creation-card">
            <form className="profile-form">
              <div className="profile-image-upload">
                <div className="profile-first-name-label">
                  <h3 className="profile-header">Profile Photo</h3>
                </div>
                <div className="profile-container3">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="profile-image"
                  />
                </div>
              </div>
              <div className="profile-first-name">
                <div className="profile-first-name-label1">
                  <h3 className="profile-header1" name= "first-name">First Name</h3>
                </div>
                <div className="profile-container4">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Enter your First Name"
                    className="profile-input input"
                  />
                </div>
              </div>
              <div className="profile-last-name">
                <div className="profile-last-name-label">
                  <h3 className="profile-header2">Last Name</h3>
                </div>
                <div className="profile-container5">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Enter your Last Name"
                    className="profile-input1 input"
                  />
                </div>
              </div>
              <div className="profile-d-o-b">
                <div className="profile-d-o-b-label">
                  <h3 className="profile-header3">Date of Birth</h3>
                </div>
                <div className="profile-container6">
                  <input
                    type="text"
                    required
                    placeholder="Enter your Date of Birth"
                    className="profile-input2 input"
                  />
                </div>
              </div>
              <div className="profile-gender">
                <div className="profile-gender-label">
                  <h3 className="profile-header4">Gender</h3>
                </div>
                <div className="profile-container7">
                  <select required className="profile-select input">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Prefer not to say</option>
                  </select>
                </div>
              </div>
              <div className="profile-bio">
                <div className="profile-bio-label">
                  <h3 className="profile-header5">Bio</h3>
                </div>
                <div className="profile-container8">
                  <textarea
                    name="Bio"
                    rows="4"
                    placeholder="Tell us a bit about yourself...."
                    className="profile-textarea textarea input"
                  ></textarea>
                </div>
              </div>
              <div className="profile-basic-info">
                <button className="profile-button Content button">Save</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Profile

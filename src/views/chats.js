import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import './chats.css'

const Chats = (props) => {
  return (
    <div className="engagements-container">
      <Helmet>
        <title>Chats - Tinada V1</title>
        <meta property="og:title" content="Engagements - Tinada V1" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="engagements-container1">
        <Sidebar></Sidebar>
        <div className="engagements-container2">
          <h1 className="engagements-text">Chats</h1>
          <section className="engagements-activity-creation-card">
            <div className="engagements-sign-in-title">
              <h1 className="engagements-header">
                Chats will display when you have created an engagement
              </h1>
            </div>
            <form className="engagements-form">
              <div className="engagements-create-first-engagement">
                <button className="engagements-button Content button">+</button>
              </div>
            </form>
          </section>
          <section className="engagements-activity-list-card">
            <div className="engagements-container3">
              <div className="engagements-sign-in-title1">
                <h1 className="engagements-header1">Chats</h1>
              </div>
              <div className="engagements-add-engagement">
                <h1 className="engagements-text1">Text</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Chats

import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import InterestedInGoing from '../components/prompt-handler'

import './engagements.css'

const Engagements = (props) => {
  return (
    <div className="chats-container">
      <Helmet>
        <title>Engagements - Tinada V1</title>
        <meta property="og:title" content="Chats - Tinada V1" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <div className="chats-container1">
        <Sidebar></Sidebar>
        <div className="chats-container2">
          <h1 className="chats-text">Engagements</h1>
          <section className="chats-activity-creation-card">
            <div className="chats-sign-in-title">
              <h1 className="chats-header">
                Create your first engagement below
              </h1>
            </div>
            <form className="chats-form">
              <InterestedInGoing/>
              <div className="chats-create-first-engagement">
                <button className="chats-button Content button">+</button>
              </div>
            </form>
          </section>
          <section className="chats-activity-list-card">
            <div className="chats-container3">
              <div className="chats-sign-in-title1">
                <h1 className="chats-header1">Engagements</h1>
              </div>
              <div className="chats-add-engagement">
                <button className="chats-button1 Content button">+</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Engagements

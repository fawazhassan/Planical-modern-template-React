import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import './engagements.css'

const Engagements = (props) => {
  return (
    <div className="engagements-container">
      <Helmet>
        <title>Engagements - Planical modern template</title>
        <meta
          property="og:title"
          content="Engagements - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="engagements-container1">
        <Sidebar></Sidebar>
        <div className="engagements-container2">
          <h1 className="engagements-text">Engagements</h1>
          <section className="engagements-activity-creation-card">
            <div className="engagements-sign-in-title">
              <h1 className="engagements-header">
                Create your first engagement below
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
                <h1 className="engagements-header1">Engagements</h1>
              </div>
              <div className="engagements-add-engagement">
                <button className="engagements-button1 Content button">
                  +
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Engagements

import React from 'react'

import PropTypes from 'prop-types'

import './sidebar.css'

const Sidebar = (props) => {
  return (
    <div className={`sidebar-sidebar ${props.rootClassName} `}>
      <nav className="sidebar-nav">
        <svg viewBox="0 0 1024 1024" className="sidebar-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
        <span className="sidebar-text">{props.text}</span>
        <span className="sidebar-text1">{props.text1}</span>
        <span className="sidebar-text2">{props.text2}</span>
      </nav>
      <div className="sidebar-profile">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="sidebar-image"
        />
        <div className="sidebar-container">
          <span className="sidebar-text3">{props.text3}</span>
          <span className="sidebar-text4">{props.text4}</span>
        </div>
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  rootClassName: '',
  text4: 'View Profile',
  text: 'Engagements',
  image_src:
    'https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&ixlib=rb-1.2.1&w=200',
  text2: 'Settings',
  text1: 'Chats',
  text3: 'John Doe',
  image_alt: 'image',
}

Sidebar.propTypes = {
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Sidebar

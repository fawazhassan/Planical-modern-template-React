import React from 'react'

import PropTypes from 'prop-types'

import './sign-up-card.css'

const SignUpCard = (props) => {
  return (
    <section className={`sign-up-card-card ${props.rootClassName} `}>
      <div className="sign-up-card-icon">
        <img
          alt={props.IconAlt}
          src={props.Icon}
          className="sign-up-card-icon1"
        />
      </div>
      <main className="sign-up-card-content">
        <h1 className="sign-up-card-header">{props.Header}</h1>
        <p className="sign-up-card-description">{props.Description}</p>
      </main>
    </section>
  )
}

SignUpCard.defaultProps = {
  Icon: '/playground_assets/group%201316-200w.png',
  Header: 'Sima Mosbacher',
  IconAlt: 'image',
  rootClassName: '',
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
}

SignUpCard.propTypes = {
  Icon: PropTypes.string,
  Header: PropTypes.string,
  IconAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
}

export default SignUpCard

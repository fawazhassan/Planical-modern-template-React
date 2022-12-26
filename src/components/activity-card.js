import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './activity-card.css'

const ActivityCard = (props) => {
  return (
    <section className={`activity-card-card ${props.rootClassName} `}>
      <main className="activity-card-header-section"></main>
      <div className="activity-card-sign-in-title">
        <h1 className="activity-card-header">{props.Header}</h1>
      </div>
      <form className="activity-card-form">
        <div className="activity-card-container">
          <div className="activity-card-container1"></div>
        </div>
        <Button rootClassName="button-root-class-name9"></Button>
      </form>
    </section>
  )
}

ActivityCard.defaultProps = {
  rootClassName: '',
  Header: "You haven't created any activities. Add in the details below",
}

ActivityCard.propTypes = {
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
}

export default ActivityCard

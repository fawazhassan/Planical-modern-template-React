import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <button className="button component-button">{props.button}</button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Button',
}

AppComponent.propTypes = {
  button: PropTypes.string,
}

export default AppComponent

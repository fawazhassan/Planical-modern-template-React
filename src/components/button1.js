import React from 'react'

import PropTypes from 'prop-types'

import './button1.css'

const Button1 = (props) => {
  return (
    <div className="button1-sign-in-provider">
      <button className="button1-button button Content">{props.button}</button>
    </div>
  )
}

Button1.defaultProps = {
  button: 'Button',
}

Button1.propTypes = {
  button: PropTypes.string,
}

export default Button1

import React from 'react'

import PropTypes from 'prop-types'

import './button.css'

const Button = (props) => {
  return (
    <div className={`button-sign-in-provider ${props.rootClassName} `}>
      <button className="button-button Content button">{props.button}</button>
    </div>
  )
}

Button.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

Button.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Button

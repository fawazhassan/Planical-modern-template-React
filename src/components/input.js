import React from 'react'

import PropTypes from 'prop-types'

import './input.css'

const Input = (props) => {
  return (
    <div className={`input-container ${props.rootClassName} `}>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="input-input input"
      />
    </div>
  )
}

Input.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'placeholder',
}

Input.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Input

import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import Input from './input'
import './sign-in-card.css'

const SignInCard = (props) => {
  return (
    <section className={`sign-in-card-card ${props.rootClassName} `}>
      <main className="sign-in-card-header-section"></main>
      <div className="sign-in-card-sign-in-title">
        <h1 className="sign-in-card-header">{props.Header}</h1>
      </div>
      <div className="sign-in-card-sign-in-providers">
        <Button rootClassName="button-root-class-name"></Button>
        <Button rootClassName="button-root-class-name1"></Button>
        <Button></Button>
      </div>
      <form className="sign-in-card-form">
        <Input></Input>
        <Input></Input>
        <a
          href={props.link_text}
          target="_blank"
          rel="noreferrer noopener"
          className="sign-in-card-link"
        >
          {props.text}
        </a>
        <Button rootClassName="button-root-class-name2"></Button>
      </form>
    </section>
  )
}

SignInCard.defaultProps = {
  text: 'Forgot your password?',
  link_text: 'https://example.com',
  rootClassName: '',
  Header: 'Sign In',
}

SignInCard.propTypes = {
  text: PropTypes.string,
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
}

export default SignInCard

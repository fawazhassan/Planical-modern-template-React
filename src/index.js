import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profile from './views/profile'
import SignInSignUp from './views/sign-in-sign-up'
import Home from './views/home'
import Engagements from './views/engagements'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Profile} exact path="/profile" />
        <Route component={SignInSignUp} exact path="/sign-in-sign-up" />
        <Route component={Home} exact path="/" />
        <Route component={Engagements} exact path="/engagements" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

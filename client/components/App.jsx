import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Beach from './Beach'
import Contact from './Contact'
import Facilities from './Facilities'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Home />
          <Nav />
          <Route exact path='/beach' component={Beach}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/facilities' component={Facilities}/>
        </div>
      </Router>
    </>
  )
}

export default App

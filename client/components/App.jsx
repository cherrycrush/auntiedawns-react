import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
// import Beach from './Beach'
// import Contact from './Contact'
// import Facilities from './Facilities'

const App = () => {
  return (
    <div>
      <Router >
        <Nav />
        <Home />
      </Router>
    </div>
  )
}

export default App

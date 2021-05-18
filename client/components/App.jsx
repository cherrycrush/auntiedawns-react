import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Beach from './Beach'
import Contact from './Contact'
import Facilities from './Facilities'

const App = () => {
  return (
    <div>
      <Router >
        <Route path={'/'} component={Nav} />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/beach'} component={Beach} />
          <Route exact path={'/facilities'} component={Facilities} />
          <Route exact path={'/contact'} component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

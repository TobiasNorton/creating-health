import React from 'react'
import './App.css'
import Home from './Components/Home'
import RelationshipRepair from './Components/RelationshipRepair'
import SevenLessons from './Components/SevenLessons'
import CorporateWellness from './Components/CorporateWellness'
import Membership from './Components/Membership'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/7-life-lessons" component={SevenLessons} />
        <Route exact path="/relationship-repair" component={RelationshipRepair} />
        <Route exact path="/corporate-wellness" component={CorporateWellness} />
        <Route exact path="/membership" component={Membership} />
      </div>
    </Router>
  )
}

export default App

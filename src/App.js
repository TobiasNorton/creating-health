import React from 'react'
import './App.css'
import Home from './Components/Home'
import RelationshipRepair from './Components/RelationshipRepair'
import SevenLessons from './Components/SevenLessons'
import CorporateWellness from './Components/CorporateWellness'
import Membership from './Components/Membership'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Other from './Components/Other'

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
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/other-good-stuff" component={Other} />
      </div>
    </Router>
  )
}

export default App

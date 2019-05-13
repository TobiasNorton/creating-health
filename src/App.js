import React from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  )
}

export default App

import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <nav className="nav-bar">
          <div className="nav-right">
            <p>About</p>
            <p>Contact</p>
            <p>Other Good Stuff</p>
            <p>Blog</p>
            <button>Set Appointment</button>
          </div>
        </nav>
        <h3>Being healthy doesn't have to be difficult.</h3>
        <button>Set Appointment</button>
      </div>
    )
  }
}

export default Home

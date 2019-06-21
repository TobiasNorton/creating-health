import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-right">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/other-good-stuff" className="nav-link">
            Other Good Stuff
          </Link>
          <button className="nav-appt">Set Appointment</button>
        </div>
      </nav>
    )
  }
}

export default NavBar

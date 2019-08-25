import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
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
          <Link>
            <button className="nav-appt">Set Appointment</button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default NavBar

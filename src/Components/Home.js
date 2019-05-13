import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <nav className="nav-bar">
            <div className="nav-right">
              <p>About</p>
              <p>Contact</p>
              <p>Blog</p>
              <p>Other Good Stuff</p>
              <button className="nav-appt">Set Appointment</button>
            </div>
          </nav>
          <section className="main">
            <h3>Being healthy doesn't have to be hard.</h3>
            <button className="body-appt">Set Appointment</button>
          </section>
        </div>
        <div className="branches">
          <Link to="" className="branch">
            The 7 Life Lessons
          </Link>
          <Link to="" className="branch">
            Relationship Repair
          </Link>
          <Link to="" className="branch">
            Corporate Wellness
          </Link>
          <Link to="" className="branch">
            Membership
          </Link>
        </div>
        <section className="message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </section>
      </>
    )
  }
}

export default Home

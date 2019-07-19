import React, { Component } from 'react'
import NavBar from './NavBar'

class Blog extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="coming-soon">
          <h3>Coming soon!</h3>
        </div>
      </>
    )
  }
}

export default Blog

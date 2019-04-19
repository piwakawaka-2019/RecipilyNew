import React from 'react'

const NavBar = (props) => {
  return (
    <nav className="nav-container">
    <div className="one">
    <a href="#" className="navLinks">Home</a>
    </div>
    <div className="two">
    <a href="#" className="navLinks">About Me</a>
    </div>
    <div className="logo">
    </div>
    <div className="three">
    <a href="#" className="navLinks">Portfolio</a>
    </div>
    <div className="four">
    <form className="navLinks">
    <label>
    Search Recipes:
    <input 
    type="text" 
    name="search" 
    // onChange={this.handleChange}
    // value={this.state.search}
    />
    </label>
    </form> 
    </div>
  </nav>
  )
}

export default NavBar 



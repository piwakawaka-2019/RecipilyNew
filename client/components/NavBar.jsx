import React from 'react'

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ""
      }
  }

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.search(this.state.search)
  }

  handleSubmit = (e) => {
    this.setState({...defaultState})
    const widget = this.state
    this.props.save(widget)
    e.preventDefault()
  }

  render(){
    return (
      <nav className="nav-container">
      <div className="one">
      <a href="#" className="navLinks">Home</a>
      </div>
      <div className="two">
      <a href="#" className="navLinks">Info</a>
      </div>
      <div className="logo">
      </div>
      <div className="three">
      <a href="#" className="navLinks">Profiles</a>
      </div>
      <div className="four">
      <form className="navLinks">
      <label>
      Search Recipes:
      <input 
      type="text" 
      name="search" 
       onChange={this.handleChange}
       value={this.state.search}
      />
      </label>
      </form> 
      </div>
    </nav>
    )
  }
  
}

export default NavBar 



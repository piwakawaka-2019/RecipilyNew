import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import Main from './Main'
import Aside from './Aside'
import NavLeft from './NavLeft'


import * as api from '../api'
import MainNav from './MainNav';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      recipe: {},
      error: ''
    }
  }

  componentDidMount () {
    //this.getRecipes()
  }

  getRecipes = (searchTerm = 'chicken') => {
    api.getRecipes(searchTerm, this.setRecipes)
  }

  setRecipes = (recipes) => {
        this.setState({
          recipes: recipes || []
        })
    }


  render() {
    return (
      <div className="wrapper">
      <NavBar search={this.getRecipes}/>
        <NavLeft recipes={this.state.recipes}/>
        <Main />
        <Aside />
        <Footer />
      </div>
    )
  }
}
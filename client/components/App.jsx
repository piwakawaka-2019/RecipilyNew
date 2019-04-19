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
    this.getRecipes()
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
    console.log('recipes', this.state.recipes);
    return (
<<<<<<< HEAD
      <div>
       <MainNav search={this.getRecipes}/>
        <NavLeft recipes={this.state.recipes}/>
||||||| merged common ancestors
      <div>
        <Header />
        <NavLeft />
=======
      <div className="wrapper">
        <NavBar />
        <NavLeft />
>>>>>>> 519ea4ac8a8721ff6fe0e9e3d2fd197685da60a7
        <Main />
        <Aside />
        <Footer />
      </div>
    )
  }
}
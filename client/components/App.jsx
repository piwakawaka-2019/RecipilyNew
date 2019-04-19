import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Aside from './Aside'
import NavLeft from './NavLeft'


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

  getRecipes = async (searchTerm) => {

    try{
      let recipes = await api.getRecipes(searchTerm);
      this.setState({
        recipes: recipes || []
      })
    }
    catch(err){this.setState({err: err})}
  }



  render() {
    return (
      <div>
        <Header />
        <NavLeft />
        <Main />
        <Aside />
        <Footer />
      </div>
    )
  }
}
import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import MainNav from './MainNav'
import Aside from './Aside'
import RecipeSnippet from './RecipeSnippet'
import NavLeft from './NavLeft'


export default class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <MainNav />
        <Aside />
        <RecipeSnippet />
        <NavLeft />

      </div>
    )
  }
}
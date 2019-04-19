import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import Main from './Main'
import Aside from './Aside'
import NavLeft from './NavLeft'


export default class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <NavLeft />
        <Main />
        <Aside />
        <Footer />
      </div>
    )
  }
}
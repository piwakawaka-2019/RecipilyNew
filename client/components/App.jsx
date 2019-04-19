import React from 'react'

import Header from './Header'
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
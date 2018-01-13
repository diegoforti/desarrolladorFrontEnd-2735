import React, { Component } from 'react'
import './App.css'

import Header from './Header'

const ajaxCall = {
  title: 'Clase 03',
  subtitle: 'Clase de los Sábados'
}

class App extends Component {
  render () {
    const { title, subtitle } = ajaxCall

    return (
      <div className='App'>
        <Header titlePrimary={title} subtitle={subtitle} />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

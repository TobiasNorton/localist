import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import UnmatchedProfile from './UnmatchedProfile'

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        {/* <UnmatchedProfile /> */}
      </div>
    )
  }
}

export default App

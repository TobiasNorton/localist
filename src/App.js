import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import MatchedProfile from './MatchedProfile'
import MyProfile from './MyProfile'
import RequestProfile from './RequestProfile'
import Browse from './Browse'

class App extends Component {
  render() {
    return (
      <div>
        {/* <HomePage /> */}
        <Browse />
        {/* <MatchedProfile /> */}
        {/* <MyProfile /> */}
        {/* <RequestProfile /> */}
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import MatchedProfile from './MatchedProfile'
import MyProfile from './MyProfile'
import RequestProfile from './RequestProfile'
import Browse from './Browse'
import CreateProfile from './CreateProfile'
import UnmatchedProfile from './UnmatchedProfile'
import AllSet from './AllSet'

class App extends Component {
  render() {
    return (
      <div>
        {/* <HomePage /> */}
        <AllSet />
        {/* <CreateProfile /> */}
        {/* <Browse /> */}
        {/* <MatchedProfile /> */}
        {/* <MyProfile /> */}
        {/* <RequestProfile /> */}
        {/* <UnmatchedProfile /> */}
      </div>
    )
  }
}

export default App

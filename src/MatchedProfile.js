import React, { Component } from 'react'

class MatchedProfile extends Component {
  render() {
    return (
      <>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <a href="#">Join</a> <a href="#">Browse</a> <a href="#">My Profile</a>{' '}
            <a href="#">Log In</a> <a href="#" />
          </div>
        </nav>
        <section className="their-profile">
          <img src="./BudsarinCropped.jpg" className="profile-pic" alt="Budsarin" />
          <h3 className="profile-name">Budsarin Hiranprueck</h3>
          <p className="from">Chiang Mai, Thailand</p>
          <p>Hi, I'm Budsarin! I've lived in Chian</p>
        </section>
      </>
    )
  }
}

export default MatchedProfile

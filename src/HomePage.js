import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <body className="body-background">
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <a href="#">Join</a> <a href="#">Log In</a> <a href="#" />
          </div>
        </nav>
        <section className="main">
          <p className="welcome">
            Welcome to
            <br />
            <span>Localist</span>
          </p>
          <h3 className="main-caption">Meet With Locals, Anywhere in the World.</h3>
          <button>Join the Family</button>
        </section>
        <section className="what-is">
          <h1>What is Localist?</h1>
          <div className="box-container">
            <div className="box">
              <p>Cultural Tourism</p>
              <p>
                Localist provides a unique platform to meet with locals anywhere on the planet so
                that travelers can get a richer experience and see things up close and personal.
                Find the best street food, the local music scene, the best views, the hidden gems
                that only the locals would know about.
              </p>
            </div>
            <div className="box">
              <p>Locals Can Hang Out With Travelers</p>
              <p>
                Show off your town! Remember, those from other countries don't have the same context
                as you; your town might be cooler than you think, and it could be a great
                opportunity to hang out with someone from another country. The best part is, it's
                non-committal, so no one is obligated to do anything beyond the initial hang out.
                Meet up for lunch, a beer or for a 3-day hike. It's up to you.
              </p>
            </div>
            <div className="box">
              <p>What Localist is Not</p>
              <p>
                Localist is not a dating website or a platform for couch sharing, but hey, it's a
                free world! If you should choose to use it for such purposes, more power to you. We
                just want Localists on both sides to have the best cultural experience they can.
              </p>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <h1>How Does It Work?</h1>
          <div className="box-container">
            <div className="box">
              <p>Create an Account</p>
              <p>
                You will be prompted to create an account with either Facebook or Google. From there
                you will be prompted to create a profile. This is your chance
              </p>
            </div>
            <div className="box">
              <p>Browse Locals</p>
            </div>
            <div className="box">
              <p>Set Up a Time and Place to Meet</p>
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default HomePage

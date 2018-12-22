import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <body>
        <nav class="nav-bar">
          <p class="logo">Localist</p>
          <div class="links">
            <a href="#">Join</a> <a href="#">Log In</a> <a href="#" />
          </div>
        </nav>
        <section class="main">
          <h3>
            Meet With Locals,
            <br />
            Anywhere in the World.
          </h3>
          <button>Join the Family</button>
        </section>
        <section class="what-is">
          <h1>What is Localist?</h1>
          <div class="box-container">
            <div class="box">
              <p>Cultural Tourism</p>
              <p>
                Localist provides a unique platform to meet with locals anywhere on the planet so
                that travelers can get a richer experience and see things up close and personal.
                Find the best street food, the local music scene, the best views, the hidden gems
                that only the locals would know about.
              </p>
            </div>
            <div class="box">
              <p>Locals Can Hang Out With Travelers</p>
              <p>
                Show off your town! Remember, those from other countries don't have the same context
                as you; your town might be cooler than you think, and it could be a great
                opportunity to hang out with someone from another country. The best part is, it's
                non-committal, so no one is obligated to do anything beyond the initial hang out.
                Meet up for lunch, a beer or for a 3-day hike. It's up to you.
              </p>
            </div>
            <div class="box">
              <p>What Localist is Not</p>
              <p>
                Localist is not a dating website or a platform for couch sharing, but hey, it's a
                free world! If you should choose to use it for such purposes, more power to you. We
                just want Localist on both sides to have the best cultural experience they can.
              </p>
            </div>
          </div>
        </section>
        <section class="how-it-works">
          <h1>How Does It Work?</h1>
          <div class="box-container">
            <div class="box">
              <p />
            </div>
            <div class="box">
              <p />
            </div>
            <div class="box">
              <p />
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default HomePage

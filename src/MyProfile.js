import React, { Component } from 'react'

class MyProfile extends Component {
  render() {
    return (
      <>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <a href="#">Requests</a>
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <a href="#">Sign Out</a> <a href="#" />
          </div>
        </nav>

        <section className="my-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">Toby Norton</h3>
              <img src="./TobyCropped.jpg" className="profile-pic" alt="Toby" />
              <p className="from">St. Petersburg, Florida, United States</p>
            </div>

            <div className="category">
              <p className="header">Languages I Speak:</p>
              <p className="body">English, some Spanish</p>
            </div>

            <div className="category">
              <p className="header">Preferred Contact Information:</p>
              <ul className="body">
                <li>WhatsApp: +1 5234 3486 324</li>
                <li>Email: tobynorton1234@something.com</li>
                <li>Facebook Messenger: Toby Norton</li>
                <li>Instagram: @toby.nort345</li>
              </ul>
            </div>

            <div className="category">
              <p className="header">About Me:</p>
              <p className="body">
                Hi, I'm Toby! I've lived in St. Petersburg, Florida for about 2 years. I like to
                bacon ipsum dolor amet spare ribs landjaeger filet mignon, frankfurter porchetta
                salami tenderloin. Hamburger porchetta frankfurter meatball picanha. Kielbasa pork
                corned beef salami pork belly cow ball tip pork loin doner pastrami. Drumstick
                leberkas ribeye brisket. Leberkas spare ribs landjaeger tail picanha salami.
                Tenderloin pancetta shankle kevin, pork loin pastrami swine tail.
              </p>
            </div>

            <div className="category">
              <p className="header">Why I Joined Localist:</p>
              <p className="body">
                Landjaeger fatback kevin shankle, porchetta chicken jowl bresaola sirloin cupim
                flank kielbasa beef doner. Kevin pastrami porchetta meatball swine brisket short
                loin chuck. Chuck prosciutto ball tip sausage picanha tongue. Shoulder jowl buffalo
                pork chop doner leberkas corned beef. Beef ribs shoulder venison shankle ham hock.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">My Upcoming Trips:</p>
              <ul>
                <li>Paris, France</li>
                <li>June 18 - July 8, 2019</li>
              </ul>
              <ul className="body">
                <li>Chiang Mai, Thailand</li>
                <li>June 18 - July 8, 2019</li>
              </ul>
            </div>
            <p>My Links</p>

            <div className="link">
              <section>
                <img src="./JeanSebastian.jpeg" className="mini-pic" />
              </section>
              <section>
                <p>Jean-Sebastian Sirois</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
              </section>
            </div>

            <div className="link">
              <section>
                <img src="./Margaux.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Margaux Anati</p>
                <p>Place, Somewhere</p>
                <p>Available Dates Here</p>
                <button>View Profile</button>
              </section>
            </div>

            <div className="link">
              <section>
                <img src="./Bruno.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Name Anamegoeshere</p>
                <p>Place, Somewhere</p>
                <p>Available Dates Here</p>
                <button>View Profile</button>
              </section>
            </div>

            <div className="link">
              <section>
                <img src="./Sarah.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Name Anamegoeshere</p>
                <p>Place, Somewhere</p>
                <p>Available Dates Here</p>
                <button>View Profile</button>
              </section>
            </div>

            <div className="link">
              <section>
                <img src="./Duanphen.jpeg" className="mini-pic" />
              </section>
              <section>
                <p>Name Anamegoeshere</p>
                <p>Place, Somewhere</p>
                <p>Available Dates Here</p>
                <button>View Profile</button>
              </section>
            </div>

            <div className="link">
              <section>
                <img src="./BudsarinCropped.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Name Anamegoeshere</p>
                <p>Place, Somewhere</p>
                <p>Available Dates Here</p>
                <button>View Profile</button>
              </section>
            </div>

            <div className="link">
              <section>
                <img src="./Naowarat.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Name Anamegoeshere</p>
                <p>Place, Somewhere</p>
                <p>Available Dates Here</p>
                <button>View Profile</button>
              </section>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default MyProfile

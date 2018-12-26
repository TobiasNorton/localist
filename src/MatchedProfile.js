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
          <div className="left">
            <img src="./BudsarinCropped.jpg" className="profile-pic" alt="Budsarin" />
            <h3 className="profile-name">Budsarin Hiranprueck</h3>
            <p className="from">Chiang Mai, Thailand</p>
            <p className="category">About Me:</p>
            <p>
              Hi, I'm Budsarin! I've lived in Chiang Mai for 10 years. I like to bacon ipsum dolor
              amet spare ribs landjaeger filet mignon, frankfurter porchetta salami tenderloin.
              Hamburger porchetta frankfurter meatball picanha. Kielbasa pork corned beef salami
              pork belly cow ball tip pork loin doner pastrami. Drumstick leberkas ribeye brisket.
              Leberkas spare ribs landjaeger tail picanha salami. Tenderloin pancetta shankle kevin,
              pork loin pastrami swine tail.
            </p>
            <p className="category">Why I Joined Localist:</p>
            <p>
              Landjaeger fatback kevin shankle, porchetta chicken jowl bresaola sirloin cupim flank
              kielbasa beef doner. Kevin pastrami porchetta meatball swine brisket short loin chuck.
              Chuck prosciutto ball tip sausage picanha tongue. Shoulder jowl buffalo pork chop
              doner leberkas corned beef. Beef ribs shoulder venison shankle ham hock.
            </p>
            <p className="category">Languages I Speak:</p>
            <p>Thai, English, Ngaw, some French</p>
            <p className="category">Contact Me:</p>
            <ul>
              <li>WhatsApp: +1 5234 3486 324</li>
              <li>Email: budsar1234@something.com</li>
              <li>Facebook Messenger: Budsarin Hueranprueck</li>
              <li>Instagram: @b.huer88</li>
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default MatchedProfile

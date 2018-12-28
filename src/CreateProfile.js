import React, { Component } from 'react'

class CreateProfile extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <a href="#">Requests</a>
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <a href="#">Sign Out</a> <a href="#" />
          </div>
        </nav>
        <div className="create-profile">
          <section className="form-body">
            <p>Name</p>
            <input type="text" placeholder="Hello?" />
            <p>Age</p>
            <input type="text" maxlength="3" placeholder="How old are you?" />
            <p>Gender*</p>

            <section className="gender">
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>
              </div>

              <div>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
              </div>

              <div>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other/Prefer not to answer</label>
              </div>
            </section>

            <p>
              Location <br /> Where do you live?
            </p>
            <input type="text" placeholder="My Hometown, Anywhere" />

            <p>
              Tell us about yourself! <br />
              Remember: The more details you provide, the more likely you are to link with others.
            </p>
            <input
              className="big-field"
              type="text"
              placeholder="Interests, hobbies, background, etc."
            />

            <p>Why did you decide to join Localist?</p>
            <input
              className="big-field"
              type="text"
              placeholder="Hidden food gems, good conversation"
            />
            <p>List your upcoming trips:</p>
            <p>City:</p>
            <input type="text" placeholder="City, Country" />
            <p>Dates:</p>
            <div className="travel-dates">
              <p>From</p>
              <input type="date" /> <p>until</p> <input type="date" />
            </div>

            <p>City:</p>
            <input type="text" placeholder="City, Country" />
            <p>Dates:</p>
            <div className="travel-dates">
              <p>From</p>
              <input type="date" /> <p>until</p> <input type="date" />
            </div>

            <p>City:</p>
            <input type="text" placeholder="City, Country" />
            <p>Dates:</p>
            <div className="travel-dates">
              <p>From</p>
              <input type="date" /> <p>until</p> <input type="date" />
            </div>

            <p>City:</p>
            <input type="text" placeholder="City, Country" />
            <p>Dates:</p>
            <div className="travel-dates">
              <p>From</p>
              <input type="date" /> <p>until</p> <input type="date" />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default CreateProfile

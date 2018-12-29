import React, { Component } from 'react'

class CreateProfile extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <a href="#">Join</a> <a href="#">Log In</a> <a href="#" />
          </div>
        </nav>

        <div className="create-profile">
          <form className="form-body">
            <div className="input">
              <p>Name</p>
              <input type="text" placeholder="Your Name Here" />
            </div>
            <div className="input">
              <p>Age</p>
              <input type="text" maxLength="3" placeholder="Your Age Here" />
            </div>
            <div className="input">
              <p>Gender*</p>
              <section className="gender">
                <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input type="radio" id="female" name="gender" value="female" />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <input type="radio" id="other" name="gender" value="other" />
                  <label htmlFor="other">Other/Prefer not to answer</label>
                </div>
              </section>
            </div>
            <div className="input">
              <p>Location</p>
              <input type="text" placeholder="My Hometown, Anywhere" />
            </div>
            <div className="input">
              <p>Tell us about yourself!</p>
              <textarea
                className="big-field"
                type="text"
                rows="5"
                placeholder="Interests, hobbies, background, etc."
              />
            </div>
            <div className="input">
              <p>Why did you decide to join Localist?</p>
              <textarea
                className="big-field"
                type="text"
                rows="5"
                placeholder="Hidden food gems, good conversation"
              />
            </div>
            <div className="input">
              <p>List your upcoming trips:</p>

              {/* <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" /> <label>until</label> <input type="date" />
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>

                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" />
                </div>

                <div className="travel-dates">
                  <label>Until</label>
                  <input type="date" />
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" /> <label>until</label> <input type="date" />
                </div>
              </div> */}

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <section className="from-until">
                    <label>From</label>
                    <input type="date" />
                  </section>
                  <section className="from-until">
                    <label>Until</label> <input type="date" />
                  </section>
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <section className="from-until">
                    <label>From</label>
                    <input type="date" />
                  </section>
                  <section className="from-until">
                    <label>Until</label> <input type="date" />
                  </section>
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <section className="from-until">
                    <label>From</label>
                    <input type="date" />
                  </section>
                  <section className="from-until">
                    <label>Until</label> <input type="date" />
                  </section>
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <section className="from-until">
                    <label>From</label>
                    <input type="date" />
                  </section>
                  <section className="from-until">
                    <label>Until</label> <input type="date" />
                  </section>
                </div>
              </div>

              <p>Upload a Photo of Yourself</p>
              <input type="text" placeholder="picture.jpg" />
            </div>
          </form>
        </div>
        <footer />
      </div>
    )
  }
}

export default CreateProfile

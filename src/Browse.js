import React, { Component } from 'react'

class Browse extends Component {
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
        <main className="browse-background">
          <div className="local">
            <section>
              <img src="./JeanSebastian.jpeg" className="mini-pic" />
            </section>
            <section>
              <p>Jean-Sebastian Sirois</p>
              <p>Paris, France</p>
              <p>Available: June 18 - July 8, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>

          <div className="local">
            <section>
              <img src="./Margaux.jpg" className="mini-pic" />
            </section>
            <section>
              <p>Margaux Anati</p>
              <p>Paris, France</p>
              <p>Available: June 18 - July 8, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>

          <div className="local">
            <section>
              <img src="./Bruno.jpg" className="mini-pic" />
            </section>
            <section>
              <p>Bruno Chastain</p>
              <p>Paris, France</p>
              <p>Available: June 28 - July 4, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>

          <div className="local">
            <section>
              <img src="./Sarah.jpg" className="mini-pic" />
            </section>
            <section>
              <p>Sarah Richelieu</p>
              <p>Paris, France</p>
              <p>Available: June 18 - July 2, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>

          <div className="local">
            <section>
              <img src="./Duanphen.jpeg" className="mini-pic" />
            </section>
            <section>
              <p>Duanphen Kaekwoon</p>
              <p>Chiang Mai, Thailand</p>
              <p>Available: June 18 - July 8, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>

          <div className="local">
            <section>
              <img src="./BudsarinCropped.jpg" className="mini-pic" />
            </section>
            <section>
              <p>Budsarin HiranPrueck</p>
              <p>Chiang Mai, Thailand</p>
              <p>Available: June 18 - July 8, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>

          <div className="local">
            <section>
              <img src="./Naowarat.jpg" className="mini-pic" />
            </section>
            <section>
              <p>Naowarat Angsakul</p>
              <p>Chiang Mai, Thailand</p>
              <p>Available: June 18 - July 8, 2019</p>
              <button>View Profile</button>
              <button>Request</button>
            </section>
          </div>
        </main>
      </>
    )
  }
}

export default Browse

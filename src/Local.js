import React, { Component } from 'react'

class Local extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Local

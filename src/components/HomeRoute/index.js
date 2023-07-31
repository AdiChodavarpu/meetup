import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="HomeContainer">
          <div className="cardContainer">
            <h1 className="meet-heading">Welcome to Meetup</h1>
            <p className="meet-description">Please register for the topic</p>

            <Link className="nav-links" to="/register">
              <button className="registerBtn" type="button">
                Register
              </button>
            </Link>

            <img
              className="meetupImg"
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home

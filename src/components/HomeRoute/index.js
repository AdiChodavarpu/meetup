import {Component} from 'react'
import {Link} from 'react-router-dom'
import ChangeContext from '../../context/changecontext'
import Header from '../Header'

import './index.css'

class Home extends Component {
  renderWelcomeUser = (userNameInput, initialTopic) => (
    <>
      <Header />
      <div className="HomeContainer">
        <div className="cardContainer">
          <h1 className="welcome-heading">Hello {userNameInput}</h1>
          <p className="Welcome-description">Welcome to {initialTopic}</p>

          <img
            className="meetupImg"
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    </>
  )

  renderGetRegister = () => (
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

  render() {
    return (
      <ChangeContext.Consumer>
        {value => {
          const {isRegistered, CourseDetails} = value
          const {userNameInput, initialTopic} = CourseDetails

          return (
            <>
              {isRegistered
                ? this.renderWelcomeUser(userNameInput, initialTopic)
                : this.renderGetRegister()}
            </>
          )
        }}
      </ChangeContext.Consumer>
    )
  }
}

export default Home

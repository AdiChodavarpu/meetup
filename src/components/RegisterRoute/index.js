import {Component} from 'react'

import Header from '../Header'

import ChangeContext from '../../context/changecontext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    initialTopic: topicsList[0].id,
    userNameInput: '',
    showErrorMsg: false,
  }

  onChangeTopic = event => {
    this.setState({initialTopic: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userNameInput: event.target.value})
  }

  onClickRegister = event => {
    event.preventDefault()
    const {userNameInput, initialTopic, showErrorMsg} = this.state
    if (userNameInput === '') {
      this.setState({showErrorMsg: true})
    } else {
      this.setState({showErrorMsg: false})
    }

    return (
      <ChangeContext.Consumer>
        {value => {
          const {isRegistered, updateRegistration} = value

          return updateRegistration(userNameInput, initialTopic)
        }}
      </ChangeContext.Consumer>
    )
  }

  render() {
    const {userNameInput, initialTopic, showErrorMsg} = this.state

    return (
      <>
        <Header />
        <div className="register-container ">
          <div className="card-container">
            <div className="imageContainer">
              <img
                className="register-image"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </div>
            <form
              className="Register-Container"
              onSubmit={this.onClickRegister}
            >
              <h1 className="register-heading">Let us join</h1>
              <div className="input-container">
                <label htmlFor="myname" className="labelElement">
                  NAME
                </label>
                <input
                  id="myname"
                  type="text"
                  value={userNameInput}
                  className="inputElement"
                  placeholder="Your Name"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <label htmlFor="mytopic" className="labelElement">
                  TOPICS
                </label>
                <select
                  className="inputElement"
                  value={initialTopic}
                  onChange={this.onChangeTopic}
                >
                  {topicsList.map(eachitem => (
                    <option key={eachitem.id} value={eachitem.id}>
                      {eachitem.displayText}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="RegisterBtn">
                Register
              </button>
              {showErrorMsg && (
                <p className="error-message">Please enter your name</p>
              )}
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Register

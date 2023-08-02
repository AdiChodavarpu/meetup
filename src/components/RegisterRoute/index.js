import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import ChangeContext from '../../context/changecontext'
import Header from '../Header'

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
    const {userNameInput, initialTopic, showErrorMsg} = this.state

    if (userNameInput === '') {
      this.setState({showErrorMsg: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {userNameInput, initialTopic, showErrorMsg} = this.state

    return (
      <ChangeContext.Consumer>
        {value => {
          const {isRegistered, updateRegistration} = value

          const Topic = topicsList.filter(
            eachitem => eachitem.id === initialTopic,
          )

          const onClickRegister = () => {
            if (!showErrorMsg) {
              updateRegistration(userNameInput, Topic[0].displayText)
              this.onClickRegister()
            } else {
              this.onClickRegister()
            }
          }

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
                  <div className="Register-Container">
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

                    <button
                      type="button"
                      onClick={onClickRegister}
                      className="RegisterBtn"
                    >
                      Register
                    </button>
                    {showErrorMsg && (
                      <p className="error-message">Please enter your name</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </ChangeContext.Consumer>
    )
  }
}

export default Register

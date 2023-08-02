import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ChangeContext from './context/changecontext'

import './App.css'

import Home from './components/HomeRoute'
import Register from './components/RegisterRoute'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    CourseDetails: {},
  }

  updateRegistration = (userNameInput, initialTopic) => {
    this.setState(prevVal => ({
      isRegistered: true,
      CourseDetails: {userNameInput, initialTopic},
    }))
  }

  render() {
    const {isRegistered, CourseDetails} = this.state

    return (
      <ChangeContext.Provider
        value={{
          isRegistered,
          CourseDetails,
          updateRegistration: this.updateRegistration,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ChangeContext.Provider>
    )
  }
}

export default App

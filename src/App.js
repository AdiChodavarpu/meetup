import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import ChangeContext from './context/changecontext'

import './App.css'

import Home from './components/HomeRoute'
import Register from './components/RegisterRoute'

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
  }

  updateRegistration = (userNameInput, initialTopic) => {
    console.log(initialTopic)
  }

  render() {
    const {isRegistered} = this.state

    return (
      <ChangeContext.Provider
        value={{isRegistered, updateRegistration: this.updateRegistration}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </ChangeContext.Provider>
    )
  }
}

export default App

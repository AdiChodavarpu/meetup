import React from 'react'

const ChangeContext = React.createContext({
  isRegistered: false,
  updateRegistration: () => {},
})

export default ChangeContext

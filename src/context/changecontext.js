import React from 'react'

const ChangeContext = React.createContext({
  isRegistered: true,
  CourseDetails: {},
  updateRegistration: () => {},
})

export default ChangeContext

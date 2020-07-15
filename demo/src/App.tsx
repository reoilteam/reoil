import React from 'react'
import { Router } from '@reach/router'
import InspectPage from './pages/inspect'
import ImgPage from './pages/img'

const App: React.FC = () => {
  return(
    <Router>
      <InspectPage path='/inspect' />
      <ImgPage path='img' />
    </Router>
  )
}

export default App

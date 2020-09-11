import React from 'react'
import { Router } from '@reach/router'
import InspectPage from './pages/inspect'
import ImgPage from './pages/img'
import BoxAlign from './pages/BoxAlign'

const App: React.FC = () => {
  return(
    <Router>
      <InspectPage path='/inspect' />
      <ImgPage path='img' />
      <BoxAlign path='boxAlign' />
    </Router>
  )
}

export default App

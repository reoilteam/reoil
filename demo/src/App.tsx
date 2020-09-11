import React from 'react'
import { Router } from '@reach/router'
import InspectPage from './pages/inspect'
import ImgPage from './pages/img'
import BoxAlign from './pages/BoxAlign'
import BoxBoxSizing from './pages/BoxBoxSizing'
import MediaPage from './pages/Media'

const App: React.FC = () => {
  return(
    <Router>
      <InspectPage path='/inspect' />
      <ImgPage path='img' />
      <BoxAlign path='boxAlign' />
      <BoxBoxSizing path='boxsizing' />
      <MediaPage path='media' />
    </Router>
  )
}

export default App

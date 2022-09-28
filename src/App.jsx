import React from 'react'
import './App.css'
import PathFindingTab from './react-components/main/pathFinding/PathFindingTab.jsx'

import Nav from './react-components/main/nav/Nav'

function App() {

  return (
      <div className='App'>
        <Nav />
        <PathFindingTab/>
      </div>
  )
}

export default App

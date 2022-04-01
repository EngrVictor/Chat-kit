import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className="App">
        <Nav />

        <div className='main-content'>
          <Tabs />
          <Main />
        </div>
      
    </div>
  )
}

export default App

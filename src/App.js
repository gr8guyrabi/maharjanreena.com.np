import React from 'react'

import { About, Contact, Services, Works } from './containers'
import Navbar from './components/Navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <About />
        <Contact />
        <Services />
        <Works />
    </div>
  )
}

export default App
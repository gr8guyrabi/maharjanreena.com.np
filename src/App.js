import React from 'react'

import { Header, About, Contact, Services, Works } from './containers'
import Navbar from './components/Navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Works />
        <Contact />
    </div>
  )
}

export default App
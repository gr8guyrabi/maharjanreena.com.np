import React from 'react'

import { Header, About, Contact, Services, Works, Footer } from './containers'
import Navbar from './components/Navbar/Navbar'
import './App.scss'

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Works />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import Header from './Components/Header/Header.jsx'
import './index.css'
import Componies from './Components/Componies/Componies.jsx'
import Residencies from './Components/Residencies/Residencies.jsx'

const App = () => {
  return (
    <div style={{position:'relative'}} className='App'>
      <div>
        <div style={{position:'absolute', backgroundColor:'gray', width:'200px', height:'200px', zIndex:'2', filter:'blur(90px)'}} className='white-gradian' />
        <Header />
        <Hero />
      </div>
      <Componies />
      <Residencies />
    </div>
  )
}

export default App
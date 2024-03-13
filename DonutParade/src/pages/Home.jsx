import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'

function Home() {
  return (
    <div className="Home">

        <header id="homeHeader">
            <img src={DonutParadeLogo} alt="Donut Parade Logo" />
            <Navbar />
        </header>

        



    </div>
  )
}

export default Home
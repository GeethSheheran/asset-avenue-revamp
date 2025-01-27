import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Market from './components/home/market'
import InvestingMode from './components/home/InvestingMode'
import StatesMeets from './components/home/StatesMeets'
import Revolutionizing from './components/home/Revolutionizing'
import PassiveIncome from './components/home/PassiveIncome'
import HowToBuy from './components/home/howtobuy'
import { HouseDetails } from './components/home/roadmap'
import Logos from './components/home/logos'
import Footer from './components/Footer'
import PieChart from './components/home/pieChart'
import HeroSection from './components/home/HeroSection'

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Revolutionizing/>
      <InvestingMode/>
      <StatesMeets/>
      <PassiveIncome/>
      {/* <HowToBuy/> */}
      <HouseDetails/>
      <PieChart/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default App
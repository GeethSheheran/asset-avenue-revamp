import React from 'react'
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

function App() {
  return (
    <div>
      <Navbar/>
      <Revolutionizing/>
      <InvestingMode/>
      <StatesMeets/>
      <PassiveIncome/>
      {/* <HowToBuy/> */}
      <HouseDetails/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar'
import Market from './components/home/market'
import InvestingMode from './components/home/InvestingMode'
import StatesMeets from './components/home/StatesMeets'
import Revolutionizing from './components/home/Revolutionizing'
import PassiveIncome from './components/home/PassiveIncome'

function App() {
  return (
    <div>
      <Navbar/>
      <Revolutionizing/>
      <InvestingMode/>
      <StatesMeets/>
      <PassiveIncome/>
    </div>
  )
}

export default App
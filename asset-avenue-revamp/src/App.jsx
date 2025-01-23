import React from 'react'
import Navbar from './components/Navbar'
import Market from './components/home/market'
import InvestingMode from './components/home/InvestingMode'
import StatesMeets from './components/home/StatesMeets'

function App() {
  return (
    <div>
      <Navbar/>
      <Market/>
      <InvestingMode/>
      <StatesMeets/>
    </div>
  )
}

export default App
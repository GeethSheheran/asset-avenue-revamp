import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import InvestingMode from './components/home/InvestingMode'
import StatesMeets from './components/home/StatesMeets'
import Revolutionizing from './components/home/Revolutionizing'
import PassiveIncome from './components/home/PassiveIncome'
import HowToBuy from './components/home/howtobuy'
import { HouseDetails } from './components/home/roadmap'
import Logos from './components/home/logos'
import Footer from './components/Footer'
import HeroSection from './components/home/HeroSection'
import PieChart from './components/home/pieChart';
import ImageSlider from './components/home/ImageSlider';

function App() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <HeroSection/>
      <Revolutionizing/>
      <InvestingMode/>
      <StatesMeets/>
      <PassiveIncome/>
      <HowToBuy/>
      <PieChart/>
      <HouseDetails/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default App
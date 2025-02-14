import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InvestingMode from "./components/home/InvestingMode";
import StatesMeets from "./components/home/StatesMeets";
import Revolutionizing from "./components/home/Revolutionizing";
import PassiveIncome from "./components/home/PassiveIncome";
import HowToBuy from "./components/home/howtobuy";
import { HouseDetails } from "./components/home/roadmap";
import Logos from "./components/home/logos";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import PieChart from "./components/home/pieChart";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  useEffect(() => {
    // Clear localStorage
    localStorage.clear();
  }, []);
  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Revolutionizing />
      <InvestingMode />
      <StatesMeets />
      <PassiveIncome />
      <HowToBuy />
      <PieChart />
      <HouseDetails />
      <Logos />
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default App;


import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FitnessGoal from './Components/FitnessGoal/FitnessGoal';
import BestOffers from './Components/Bestoffers/BestOffers';
import Services from './Components/Services/Services';
import BestPlan from './Components/BestPlan/BestPlan';
import Clintes from './Components/Clintes/Clintes';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FitnessGoal/>
      <BestOffers/>
      <Services/>
      <BestPlan/>
      <Clintes/>
      <Footer/>
    </div>
  )
}

export default App


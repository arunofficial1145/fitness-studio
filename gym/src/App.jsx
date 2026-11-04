import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Store from './pages/Store.jsx';
import Exercise from './pages/Exercise.jsx';
import DietPlans from './pages/DietPlans.jsx';
import Article from './pages/Article.jsx';
import MuscleBuilding from './pages/MuscleBuilding.jsx'
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Abs from './pages/Abs.jsx'
import Obliques from './pages/Obliques.jsx'
import Bicep from './pages/Bicep.jsx'
import Chest from './pages/Chest.jsx';
import AbominalHipThrust from './pages/AbominalHipThrust.jsx';
import DeadBug from './pages/DeadBug.jsx';
import LegRaise from './pages/LegRaise.jsx';
import DeclineBenchAlternatingLegRaise from './pages/DeclineBenchAlternatingLegRaise.jsx';
import AbCrunch from './pages/AbCrunch.jsx';
import LowerAbdominalHipRoll from './pages/LowerAbdominalHipRoll.jsx';
import SeatedKneeTucks from './pages/SeatedKneeTucks.jsx';
import SideCrunchWithLegLift from './pages/SideCrunchWithLegLift.jsx';
import WeightedRussianTwist from './pages/WeightedRussianTwist.jsx';
import Store2 from './pages/Store2.jsx';
import Store3 from './pages/store3.jsx';
import Store5 from './pages/Store5.jsx';
import Store6 from './pages/Store6.jsx';
import Store8 from './pages/Store8.jsx';
import Store9 from './pages/Store9.jsx';
import Store10 from './pages/Store10.jsx';
import Store11 from './pages/Store11.jsx';
import Store12 from './pages/Store12.jsx';
import Store13 from './pages/Store13.jsx';
import Sidecrunch from './pages/SideCrunch.jsx';
import Seatedtwist from './pages/Seatedtwist.jsx';
import DumbbellSideBends from './pages/DumbbellSideBends.jsx';
import Pushup from './pages/Pushup.jsx';
import CableCurl from './pages/CableCurl.jsx';
import StandingDumbbellDragcurl from './pages/StandingDumbbellDragcurl.jsx';
import Cablepreacher from './pages/Cablepreacher.jsx';
import Spidercurl from './pages/Spidercurl.jsx';
import AlternatingInclineDumbbell from './pages/AlternatingInclineDumbbell.jsx';
import Hammer from './pages/Hammer.jsx';
import './App.css';
import Training from './pages/Training.jsx';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/DietPlans" element={<DietPlans />} />
        <Route path='/Article' element={<Article />} />
        <Route path='/Abs' element={<Abs />} />
        <Route path='/Obliques' element={<Obliques />} />
        <Route path="/muscle-building" element={<MuscleBuilding />} />
        <Route path='/Bicep' element={<Bicep />} />
        <Route path='/Chest' element={<Chest />} />
        <Route path='/AbominalHipThrust' element={<AbominalHipThrust />} />
        <Route path='/DeadBug' element={<DeadBug />} />
        <Route path='/LegRaise' element={<LegRaise />} />
        <Route path='/DeclineBenchAlternatingLegRaise' element={<DeclineBenchAlternatingLegRaise />} />
        <Route path='/AbCrunch' element={<AbCrunch />} />
        <Route path='/LowerAbdominalHipRoll' element={<LowerAbdominalHipRoll />} />
        <Route path='/SeatedKneeTucks' element={<SeatedKneeTucks />} />
        <Route path='/SideCrunchWithLegLift' element={<SideCrunchWithLegLift />} />
        <Route path='/WeightedRussianTwist' element={<WeightedRussianTwist />} />
        <Route path='/Store2' element={<Store2 />} />
        <Route path='/Store3' element={<Store3 />} />
        <Route path='/Store5' element={<Store5 />} />
        <Route path='/Store6' element={<Store6 />} />
        <Route path='/Store8' element={<Store8 />} />
        <Route path='/Store9' element={<Store9 />} />
        <Route path='/Store10' element={<Store10 />} />
        <Route path='/Store11' element={<Store11 />} />
        <Route path='/Store12' element={<Store12 />} />
        <Route path='/Store13' element={<Store13 />} />
        <Route path='/Sidecrunch' element={<Sidecrunch />} />
        <Route path='/Seatedtwist' element={<Seatedtwist />} />
        <Route path='/DumbbellSideBends' element={<DumbbellSideBends />} />
        <Route path='/Pushup' element={<Pushup />} />
        <Route path='/Cablecurl' element={<CableCurl />} />
        <Route path='/StandingDumbbellDragcurl' element={<StandingDumbbellDragcurl />} />
        <Route path='/Cablepreacher' element={<Cablepreacher />} />
        <Route path='/Spidercurl' element={<Spidercurl />} />
        <Route path='/AlternatingInclineDumbbell' element={<AlternatingInclineDumbbell />} />
        <Route path='/Hammer' element={<Hammer />} />
         <Route path='/Training' element={<Training />} />
        <Route path='/Login' element={<Login />} />
      </Routes>



    </div>
  );
}
export default App;
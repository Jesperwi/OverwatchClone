import React from 'react';
import Navbar from './components/Navbar';
import Videobar from './components/Videobar'
import './App.css';
import OverwatchInfo from './components/OverwatchInfo';
import CelebrationBar from './components/Celebrationbar';
import CeleLoot from './components/CeleLoot';
import OverwatchTwo from './components/OverwatchTwo';
import CharacterPicks from './components/CharacterPicks';
import FooterBuyNow from './components/FooterBuyNow';
import FooterOw from './components/FooterOw';
import FooterOwDetail from './components/FooterOwDetail';
import FooterLast from './components/FooterLast';
const App = () => {

  return (
    <div>
    <Navbar />
    <Videobar/>
    <OverwatchInfo/>
    <CelebrationBar/>
    <CeleLoot/>
    <OverwatchTwo/>
    <CharacterPicks/>
    <FooterBuyNow/>
    <FooterOw/>
    <FooterOwDetail/>
    <FooterLast/>
    </div>

  )
}
export default App;

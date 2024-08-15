// import from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Onboarding from './components/Onboarding';
import Fight from './components/Fight';
import Honor from './components/Honor';
import League from './components/League';
import Quest from './components/Quest';
import Train from './components/Train';
import Settings from './components/Settings';
import Exchange from './components/Exchange';
import Languages from './components/Languages';
import Ceo from './components/Ceo';
import Cipher from './components/Cipher';
import Airdrop from './components/Airdrop';
import Airdrop2 from './components/Airdrop2';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/honor" element={<Honor />} />
          <Route path="/league" element={<League />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/train" element={<Train />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/exchange" element={<Exchange />} />
          <Route path="/settings/language" element={<Languages />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/cipher" element={<Cipher />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/airdrop2" element={<Airdrop2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

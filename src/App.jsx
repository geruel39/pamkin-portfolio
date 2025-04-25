import './App.css'
import "./index.css"
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadScreen } from './components/LoadScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Team } from './components/pages/Team';
import {Project} from './components/pages/Project';
import {Contact} from './components/pages/Contact';

function App() {

  //Set time for loading screen to disappear when page is load
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {setIsLoading(false);}, 1000);

    return () => clearTimeout(timer);
  }, []);

  //Set the state to open/close Menu
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>

      {isLoading && <LoadScreen /> } 

      <div className={`min-h-screen bg-[url(/endless-constellation.svg)] transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>


      </div>


    </>
  )
}

export default App

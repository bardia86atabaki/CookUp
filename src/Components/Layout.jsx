import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import PerpularFood from '../pages/PerpularFood';
import Home from '../pages/Home';
import About from '../pages/About';
import Comunity from '../pages/Comunity';
import Download from '../pages/Download';
import Landing from '../pages/Landing';

function Layout() {
  return (
    <div className='px-[98px] py-[18px] font-inter'>
      <Navbar />
      <Home />
      <PerpularFood />
      <About />
      <Comunity />
      <Download/>
      <Landing/>
      <Outlet />
    </div>
  );
}

export default Layout;

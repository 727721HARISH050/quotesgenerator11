import React from 'react';
import "../index.css"

import Contact from './Contact';
const HomePage = () => {
  return (
    <>
    <div className="home flex flex-col  items-center">
      <div style={{marginTop:'30vh'}}>
      <h1 className="text-4x1 font-medium text-light text-center mt-8" style={{ fontSize: 70 }}>SIGMA RQG</h1>
      <p className="text-center text-light max-w-xl" style={{ fontSize: 50 }}>
      Get Motivation Instantly !!!</p><br/>
      <center><a href='/quotes' className="mt-5 text-bg-success rounded-2 p-2" style={{ fontSize: 50 }}>New Quote</a></center>
      </div>
      
    </div>
    
    <Contact/>
    </>
  );
}

export default HomePage;

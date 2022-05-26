import React from 'react';
import Hero from '../components/sections/Hero';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <div className='mission-statement-container'>
        <h3 className='spacing'>Here at DreamsBridge we aim to bridge the gap between immigrants and DACA recipients who are in need of help navigating the complex legislation surrounding immigration with people that are willing and qualified to help.</h3>
      </div>
      <Testimonial topDivider />
    </>
  );
}

export default Home;
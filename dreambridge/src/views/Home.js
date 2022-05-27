import React from 'react';
import Hero from '../components/sections/Hero';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <div className='illustration-section-02'>
      <div className='mission-statement-container'>
        <h3 className='spacing'>Here at DreamsBridge we aim to bridge the gap between immigrants and DACA recipients who are in need of help navigating the complex legislation surrounding immigration with people that are willing and qualified to help.</h3>
      </div>
      <div className='mission-statement-container'>
      <iframe width="750" height="580" frameborder="0" src="https://usafacts.org/embed/chart/?chartType=0&metrics=%5B%7B%22id%22%3A110592%2C%22fips%22%3A%22US%22%7D%2C%7B%22id%22%3A110593%2C%22fips%22%3A%22US%22%7D%5D&parentID=110590&source=https%3A%2F%2Fa.usafacts.org%2Fapi%2Fv4%2FMetrics&subtitle=By%20filing%20status&title=DACA%20recipients"></iframe>
        </div>
        </div>
      <Testimonial topDivider />
    </>
  );
}

export default Home;
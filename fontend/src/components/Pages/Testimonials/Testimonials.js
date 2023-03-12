//Imports
import React from 'react';
import HeroSection2 from '../../HeroSection2/HeroSection2';
import HeroSection1 from '../../HeroSection1/HeroSection1';
import { testObjOne, testObjTwo, testObjThree } from './Data';

//Testimonials page which holds all components for this page.
function Testimonials() {
  return (
    <>
    {/* Hero section components with data objects from the testimonials data file passed into them */}
      <HeroSection1 {...testObjOne} />
      <HeroSection2 {...testObjTwo} />
      <HeroSection2 {...testObjThree} />
    </>
  );
}

export default Testimonials;

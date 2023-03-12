//Imports
import React from 'react';
import HeroSection1 from '../../HeroSection1/HeroSection1';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

//Home page which holds all components for this page.
function Home() {
  return (
    <>
    {/* Hero section components with data objects from the home page data file passed into them */}
      <HeroSection1 {...homeObjOne} />
      <HeroSection1 {...homeObjThree} />
      <HeroSection1 {...homeObjTwo} />
    </>
  );
}

export default Home;
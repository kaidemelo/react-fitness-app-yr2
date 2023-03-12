//Imports
import React from 'react';
import HeroSection1 from '../../HeroSection1/HeroSection1';
import { howitworksObjOne, howitworksObjTwo, howitworksObjThree, howitworksObjFour,  howitworksObjFive} from './Data';

//How it works page which holds all components for this page.
function HowItWorks() {
  return (
    <>
    {/* Hero section components with data objects from the how it works data file passed into them */}
      <HeroSection1 {...howitworksObjOne} />
      <HeroSection1 {...howitworksObjTwo} />
      <HeroSection1 {...howitworksObjThree} />
      <HeroSection1 {...howitworksObjFour} />
      <HeroSection1 {...howitworksObjFive} />
    </>
  );
}

export default HowItWorks;

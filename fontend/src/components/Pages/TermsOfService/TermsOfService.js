//Imports
import React from 'react';
import HeroSection1 from '../../HeroSection1/HeroSection1';
import { tosObjOne } from './Data';

//Terms of service page which hold all components for this page.
function TermsOfService() {
  return (
    <>
    {/* Hero section component with data objects from the terms of service data file passed into it */}
      <HeroSection1 {...tosObjOne} />
    </>
  );
}

export default TermsOfService;

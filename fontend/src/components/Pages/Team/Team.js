//Imports
import React from 'react';
import HeroSection3 from '../../HeroSection3/HeroSection3';
import { teamObjOne } from './Data';

//Team page which holds all components for this page.
function Team() {
  return (
    <>
    {/* Hero section component with data object from the team data file passed into it */}
      <HeroSection3 {...teamObjOne} />
    </>
  );
}

export default Team;

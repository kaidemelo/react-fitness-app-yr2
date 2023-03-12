//Imports
import React from 'react';
import HeroSection1 from '../../HeroSection1/HeroSection1';
import { pricingObjOne } from './Data';
import PricingComponent from '../../PricingComponent/Pricing';

//Pricing page which holds all components for this page.
function PricingPage() {
  return (
    <>
    {/* Hero section component with data object from the pricing page data file passed into it */}
      <HeroSection1 {...pricingObjOne} />
      {/* Pricing component */}
      <PricingComponent />
    </>
  );
}

export default PricingPage;

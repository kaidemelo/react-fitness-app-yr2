//Imports
import React from 'react';
import { dashboardObjOne} from './Data';
import HeroSection4 from '../../HeroSection4/HeroSection4';
import {withRouter} from 'react-router-dom';
import GoogleMaps from '../../GoogleMaps/GoogleMaps'

//Dashboard page which holds all components for this page.
function Dashboard() {
    return (
      <>
      {/* Hero section components with data objects from the how it works data file passed into them */}
        <HeroSection4 {...dashboardObjOne} />
        <GoogleMaps/>
      </>
    );
  }
  
export default withRouter(Dashboard);
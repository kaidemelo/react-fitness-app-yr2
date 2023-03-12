//Imports
import React from 'react';
import HeroSection1 from '../../HeroSection1/HeroSection1';
import { errorpage404ObjOne } from './Data';

//404 Error page which holds all components for this page.
function ErrorPage404() {
  return (
    <>
    {/* Hero section component with data object from the error page 404 data file passed into it */}
      <HeroSection1 {...errorpage404ObjOne} />
    </>
  );
}

export default ErrorPage404;

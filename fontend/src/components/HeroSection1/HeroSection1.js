//Imports
import React from 'react';
import '../HeroSection1/HeroSection1.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function HeroSection1({
  //Imported variables which will come from the coresponding data file passed into the hero section.
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonEnabled,
  buttonLabel,
  buttonLink,
  img,
  alt,
  imgStart
}) {
  return (
  //Dictates how the passed variables from the coresponding data file is arranged in the hero section
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                  {buttonEnabled ? <Link to= {buttonLink}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button> </Link> : null}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection1;
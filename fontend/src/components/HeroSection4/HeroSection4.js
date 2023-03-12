//Imports
import React from 'react';
import './HeroSection4.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function HeroSection4({
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
        className={lightBg ? 'home__hero-section4' : 'home__hero-section4 darkBg4'}
      >
        <div className='container4'>
          <div
            className='row4 home__hero-row4'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col4'>
              <div className='home__hero-text-wrapper4'>
                <div className='top-line4'>{topLine}</div>
                <h1 className={lightText ? 'heading4' : 'heading4 dark4'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle4'
                      : 'home__hero-subtitle4 dark4'
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
            <div className='col4'>
              <div className='home__hero-img-wrapper4'>
                <img src={img} alt={alt} className='home__hero-img4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection4;

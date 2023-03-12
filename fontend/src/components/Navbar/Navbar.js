//Imports
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaHeartbeat, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

//Navbar component to display the naigation links at the top of pages
function Navbar() {
  //Variable declarations
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //If window size is equal to or les than 960 setbutton to false, else show button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            {/* Navbar logo */}
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaHeartbeat className='navbar-icon' />
              FITNESS CENTRAL
            </Link>

            {/* Handles the state for the sidebar drop down for mobile  */}
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              {/* Home page link  */}
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                {/* Pricing page link  */}
                <Link
                  to='/pricing'
                  className='nav-links'
                  onClick={closeMobileMenu} >
                  Pricing
                </Link>
              </li>
              <li className='nav-item'>
                {/* Testimonials page link  */}
                <Link
                  to='/testimonials'
                  className='nav-links'
                  onClick={closeMobileMenu} >
                  Testimonials
                </Link>
              </li>
              <li className='nav-btn'>
                {/* Sign Up page button (only shows on mobile size screens) also links to sign up page but from mobile menu  */}
                {/* If button not enabled then show Sign up page link in navbar (for screens bigger than 960px)  */}
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonColor='blue' >SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu} >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

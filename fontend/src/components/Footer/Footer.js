//Imports
import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat,
  FaGooglePlay,
  FaAppStoreIos,
  FaGraduationCap,
  FaGithub,
  FaUniversity
} from 'react-icons/fa';

//Footer component to display the information and links at the bottom of pages
function Footer() {
  return (
    <div className='footer-container'>
      {/* Email subscription section */}
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign up to get special news and exclusive offers
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      {/* Footer useful links section */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Useful Links</h2>
            <Link to={{ pathname: "https://github.com/kaidemelo/FitnessCentralWebApp" }}
            target='_blank'
            >GitHub Repo</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/team'>Team</Link>
          </div>
        </div>
        {/* Footer about us links section */}
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/terms-of-service'>Terms of Service</Link>
            <Link to='/how-it-works'>How it works</Link>
            <Link to='/testimonials' >Testimonials</Link>
          </div>
        </div>
      </div>
      {/* Footer Icon links section */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            {/* Footer logo */}
            <Link to='/' className='social-logo'>
              <FaHeartbeat className='navbar-icon' />
              FITNESS CENTRAL
            </Link>
          </div>
          {/* Footer copyright info */}
          <small className='website-rights'>FITNESS CENTRAL © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://play.google.com/store/apps/" }}
              target='_blank'
              aria-label='Google Play Store'
            >
              <FaGooglePlay />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://apps.apple.com/" }}
              target='_blank'
              aria-label='App Store'
            >
              <FaAppStoreIos />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://www.gold.ac.uk/ug/bsc-computer-science/" }}
              target='_blank'
              aria-label='Degree Course Page'
            >
              <FaGraduationCap />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://www.gold.ac.uk/" }}
              target='_blank'
              aria-label='Goldsmiths University'
            >
              <FaUniversity />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://github.com/kaidemelo/FitnessCentralWebApp" }}
              target='_blank'
              aria-label='GitHub Repo'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

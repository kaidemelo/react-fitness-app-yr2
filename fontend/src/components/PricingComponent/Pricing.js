//Imports
import React from 'react';
import { Button } from '../Button/Button';
import './Pricing.css';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { AiFillFire } from 'react-icons/ai';
import { FaPoo } from 'react-icons/fa';

//Pricing component to display types of plans and subsequent prices
function PricingComponent() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          {/* Heading */}
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            
            {/* Starter Membership (£4.99 Per Month) */}
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                {/* Icon for starter membership */}
                <div className='icon'>
                  <FaPoo />
                </div>
                <h3>Starter</h3>
                <h4>£4.99</h4>
                <p>per month</p>
                {/* Starter membership features */}
                <ul className='pricing__container-features'>
                  <li>Standard Membership</li>
                  <li>Charged Monthly</li>
                  <li>All Standard Features</li>
                </ul>
                {/* Select starter membership button */}
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Select Plan
                </Button>
              </div>
            </Link>

            {/* Premium Membership (£9.99 Per Month) */}
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                {/* Icon for premium membership */}
                <div className='icon'>
                  <AiFillFire />
                </div>
                <h3>Premium</h3>
                <h4>£9.99</h4>
                <p>per month</p>
                {/* Premium membership features */}
                <ul className='pricing__container-features'>
                  <li>Premium Membership</li>
                  <li>Charged Monthly</li>
                  <li>Standard + Advanced Features</li>
                </ul>
                {/* Select premium membership button */}
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Select Plan
                </Button>
              </div>
            </Link>

            {/* Ultimate Membership (£94.99 Per Year) */}
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                {/* Icon for premium membership */}
                <div className='icon'>
                  <GiCutDiamond />
                </div>
                <h3>Ultimate</h3>
                <h4>£94.99</h4>
                <p>per year</p>
                {/* Ultimate membership features */}
                <ul className='pricing__container-features'>
                  <li>Ultimate Membership</li>
                  <li>Charged Yearly</li>
                  <li>Advanced Features + Meal Plan</li>
                </ul>
                {/* Select ultimate membership button */}
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Select Plan
                </Button>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default PricingComponent;

import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='footer__top'>
          <div className='footer__main'>
            <div className='footer__logo-lang'>
              <img
                className='footer__logo'
                src='./images/logo-white.svg'
                alt='uber eats'
              />
              <div className='footer__lang'>Language</div>
            </div>

            <div className='footer__mobile-apps'>
              <a href='#' className='footer__mobile-app'>
                <img src='./images/appstore.png' alt='appstore' />
              </a>
              <a href='#' className='footer__mobile-app'>
                <img src='./images/googleplay.png' alt='googleplay' />
              </a>
            </div>
          </div>

          <div className='footer__top-links links'>
            <a className='links__link links__link--weight' href='#'>
              About UberEats
            </a>
            <a className='links__link' href='#'>
              Read our blog
            </a>
            <a className='links__link' href='#'>
              Sign up to deliver
            </a>
            <a className='links__link' href='#'>
              Add your restaurant
            </a>
          </div>
          <div className='footer__top-links links'>
            <a className='links__link links__link--weight' href='#'>Get help</a>
            <a className='links__link' href='#'>Read FAQs</a>
            <a className='links__link' href='#'>View all cities</a>
          </div>
        </div>

        <div className='footer__separator'></div>

        <div className='footer__bottom'>
          <p className='footer__copyrights'>© 2019 Uber Technologies Inc.a</p>
          <div className='footer__misc'>
            <div className='footer__bottom-links links'>
              <a className='links__link' href='#'>
                Privacy policy
              </a>
              <a className='links__link' href='#'>
                Terms of use
              </a>
              <a className='links__link' href='#'>
                Pricing
              </a>
            </div>

            <div className='footer__social  social'>
              <a className='social__link' href='#'>
                <img src='./images/fb.svg' alt='facebook'/>
              </a>
              <a className='social__link' href='#'>
                <img src='./images/twitter.svg' alt='twitter'/>
              </a>
              <a className='social__link' href='#'>
                <img src='./images/instagram.svg' alt='instagram'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

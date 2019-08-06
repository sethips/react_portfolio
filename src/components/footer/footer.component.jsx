import React from 'react';
import logoFooter from '../../assets/logo_footer.svg';

import './footer.style.scss';

const Footer = () => (
  <div className='footer_container'>
    <span className='nut' />
    <div className='footer'>
      <img src={logoFooter} className='footer__logo' alt='footer-logo' />
      <span>virtual.employee@gmail.com</span>
      <span>San Jose, Costa Rica></span>
    </div>
  </div>
);

export default Footer;

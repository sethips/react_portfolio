import React from 'react';
import logoFooter from '../../assets/logo_footer.svg';

import './footer.style.scss';

const Footer = () => (
  <div className='footer_container'>
    <div className='footer'>
      <img src={logoFooter} className='footer__logo' alt='footer-logo' />
      <span>San Jose, Costa Rica</span>
      <span>virtual.employee@gmail.com</span>
      <span>Copyright © 2019 Luigi Castro</span>
      <span>All Rights Reserved</span>
      <span className='nut' />
    </div>
  </div>
);

export default Footer;

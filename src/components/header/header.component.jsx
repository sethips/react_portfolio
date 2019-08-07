import React from 'react';
import logo from '../../assets/Logo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <img src={logo} className='header__logo' alt='header-logo' />
    <div />
    <div />
  </div>
);

export default Header;

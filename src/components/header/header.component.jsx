import React from 'react';
import logo from '../../assets/Logo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div />
    <div />
    <img src={logo} className='header__logo' alt='header-logo' />
  </div>
);

export default Header;

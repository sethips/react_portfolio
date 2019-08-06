import React from 'react';
import Header from '../components/header/header.component';

import Footer from '../components/footer/footer.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='page'>
    <Header className='page__header' />
    <div className='page__body'>Body of work</div>
    <Footer className='page__footer' />
  </div>
);

export default HomePage;

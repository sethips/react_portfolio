import React from 'react';
import Header from '../components/header/header.component';

import Footer from '../components/footer/footer.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div>
    <Header />
    <div className='test'>Body</div>
    <Footer />
  </div>
);

export default HomePage;

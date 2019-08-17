import React from 'react';
import Header from '../../components/header/header.component';
import SwiperRC from './../../components/react-swiper/index.js'
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';

import {ProjectsList} from '../../ProjectsList'
import {Testimonials} from '../../Testimonials'
import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      ProjectsList,
      Testimonials
    };
  }

  render() {
    return (
      <div className='page'>
        <Header className='page__header' />
        <div className='page__body'>
        <SwiperRC projects={this.state.ProjectsList}></SwiperRC>
        <About></About>
        <SwiperRC testimonials={this.state.Testimonials}></SwiperRC>
        </div>
        <Footer className='page__footer' />
      </div>
    );
  }
}

export default HomePage;

import React from 'react';
import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';
import Swiper from '../../components/swiper/swiper.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          image: '/project1.jpg',
          title: 'Monsters Rolodex',
          text: 'Small web project which pulls dynamic content and displays it to the user. Additionally provides an interface to search through the content.',
          topics: [
           'Fetching API Data',
           'Filtering, Mapping and Manipulating Json Data',
           'Deep dive into class/function based components structure'
          ]
        },
        {
          image: '',
          title: 'E-Commerce Site',
          text: 'Deep Dive into working with react and several technologies for a large scale project',
          topics: [
            'Full site structure',
            'Firebase'
          ]
        },
        {
          image: '',
          title: 'Javascript Calculator',
          text: 'A Javascript calculator with scss and html.',
          topics: [
            'Javascript fundamentals',
            'manipulating javascript datasets and css clases'
          ]
        },
        {
          image: '',
          title: 'A simpler portfolio site Luigi Castro Homepage',
          text: 'A simple html, scss website created to explore advanced scss. With this website I underwent the full process of wireframing, designing in Affinity Designer and then coding with pixel perfect precision. I also wanted to explore the functonality of parcel.js and practiced other web bundling methodologies (Gulp,Web Pack). After some experimentation went back to Parcel',
          topics: [
            'Html',
            'css, scss, BEM',
            'Parcel.js, Gulp.js'


          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className='page'>
        <Header className='page__header' />
        <div className='swipecontainer'>
          <Swiper projects={this.state.projects} />
        </div>
        <About />
        <Footer className='page__footer' />
      </div>
    );
  }
}

export default HomePage;

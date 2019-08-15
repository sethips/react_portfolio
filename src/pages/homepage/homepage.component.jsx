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
          text: 'Based on an online course, to practice React. ',
          topics: 
          ['Fetching Data from API Dynamic content',
           'filtering, mapping and manipulating data',
           'Deep dive in component structure']
        },
        {
          image: '',
          title: 'Card 2',
          text: 'card2 text goes here'
        },
        {
          image: '',
          title: 'Card 3',
          text: 'card3 text goes here'
        },
        {
          image: '',
          title: 'Card 4',
          text: 'card4 text goes here'
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

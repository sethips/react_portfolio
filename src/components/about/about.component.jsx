import React from 'react';

import './about.styles.scss';
import Me from '../../assets/Me@2x.png';
import Luigi from '../../assets/name.svg';

const About = () => (
  <div className='about'>
    <div className='about__content'>
      <img src={Luigi} alt='Luigi Castro' className='about__banner' />
      <p className='about__text'>
        <span>Hello</span>, I am a developer with wicked design skills under my
        belt. I have previous experience in management, infrastructure and many
        other technical aspects. While working through those years I always kept
        the passion for art, design and coding as a hobby. Image and perception
        are top priority and should be treated as such.
      </p>
    </div>
    <img src={Me} alt='Luigi' className='about__me' />
  </div>
);

export default About;

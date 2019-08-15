import React from 'react';

import './about.styles.scss';
import Me from '../../assets/Me@2x.png';
import Luigi from '../../assets/name.svg';

const About = () => (
  <div className='about'>
    <div className='about__content'>
      <img src={Luigi} alt='Luigi Castro' className='about__banner' />
      <p className='about__text'>
        <span>Hello</span>, Throughout my career I have developed an expertise
        in solving technical and . The approach
        always being what is our next challenge and how do we master it. We will
        make some mistakes along the way and in those moments we will learn and
        avoid further problems. I believe that understanding is one of the
        pillars of what makes a great leader. I love art, videogames, Code,
        making greact interactions and much more.
      </p>
    </div>
    <img src={Me} alt='Luigi' className='about__me' />
  </div>
);

export default About;

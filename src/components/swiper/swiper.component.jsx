import React from 'react';
import Swiper from 'react-id-swiper';
import { ProjectCard } from '../../components/project-card/project-card.component';

import 'react-id-swiper/lib/styles/scss/swiper.scss';
import './swiper.styles.scss';

const Navigation = (props) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false
    },
    containerClass: 'customized-swiper-container' // Replace swiper-container with customized-swiper-container
  };

  return (
    <Swiper {...params}>
      {props.projects.map((project, i) => <span key={i}><ProjectCard card={project}>{props.title}</ProjectCard></span>)}
    </Swiper>
  );
};
export default Navigation;

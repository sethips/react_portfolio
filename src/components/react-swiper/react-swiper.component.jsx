import React from 'react';
import Swiper from 'react-id-swiper';
import SlidelList from './projects-list/projects-list.component'


import 'react-id-swiper/lib/styles/scss/swiper.scss';
import './react-swiper.styles.scss'


const SwiperRC = (props) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

  }
  return (
    <Swiper {...params} {...props}>
      <SlidelList {...props}></SlidelList>
    </Swiper>
  )
};
export default SwiperRC;
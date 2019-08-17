import React from 'react';
import Swiper from 'react-id-swiper';
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
    <Swiper {...params}>
    <span>1</span>
    <span>2</span>
    </Swiper>
  )
};
export default SwiperRC;
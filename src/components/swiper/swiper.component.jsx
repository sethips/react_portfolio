
  import React from 'react';
  import Swiper from 'react-id-swiper';
  import About from './../about/about.component'

  import 'react-id-swiper/lib/styles/css/swiper.css';

  
  const LoopModeInfinityLoop = () => {
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
      }
    }
    return (
      <Swiper {...params}>
        <div><About></About></div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    )
  };
  export default LoopModeInfinityLoop;
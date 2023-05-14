import React from 'react'
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Carousel from '../../Components/Client/Carousel';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Carousel title="Modern Design" img="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Carousel title="Creative Design" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>


      Home</div>
  )
}

export default Home
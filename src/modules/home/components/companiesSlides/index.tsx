/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import {
  Autoplay, Pagination, Navigation, EffectFade, FreeMode,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// interface swiperProps {
//   Cards: Array<Object>
// }
export const SwiperContainer:React.FC = () => (
  <div className=" mt-16 w-full h-20">
    <Swiper
      slidesPerView={4}
      spaceBetween={100}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Pagination, Navigation,FreeMode]}
      className=" mySwiper"
    >
      <SwiperSlide className=" bg-D9D9D9 py-4 px-28  h-20 w-20">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 4</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 5</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 6</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 7</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 8</SwiperSlide>
      <SwiperSlide className="bg-D9D9D9 py-4 px-28 h-20 w-20">Slide 9</SwiperSlide>
    </Swiper>
  </div>

);

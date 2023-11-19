/* eslint-disable react/no-array-index-key */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import classes from '../aboutQr.module.scss';

interface swiperProps {
  Cards: Array<Object>
}

export const CarouselContainer:React.FC<swiperProps> = ({ Cards }) => {
  const pagination = {
    clickable: true,
    renderBullet(index, className = 'bg-black h-5') {
      return `<span class="${className}"></span>`;
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className=" w-64"
      spaceBetween={10}
      slidesPerView={1.1}
    >
      {Cards?.map((el:any, index:any) => (
        <SwiperSlide key={index} className=" m-auto h-full w-4">
          <div key={index} className={classes.cardBox}>
            <Image width={el.img.width} height={el.img.height} src={el.img.url} alt={el.img.alt} />
            <h2 className=" font-inter font-wt-700  leading-6text-fs-1  text-left ">{el.heading}</h2>
            <p className="text-5A5B70 w-52 font-primary text-fs-0.875 leading-7 text-left ">{el.description}</p>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  );
};

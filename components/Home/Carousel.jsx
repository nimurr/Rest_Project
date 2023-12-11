"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const Carousel = () => {
  return (
    <div className='my-10 max-w-7xl overflow-hidden mx-auto '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image 
            alt='image'
            height={400}
            width={800}
            src={'https://res.cloudinary.com/dav9mftpk/image/upload/v1701752610/Screenshot_1_klyggc.png'}
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='image'
            height={'500'}
            width={800}
            src={'https://res.cloudinary.com/dav9mftpk/image/upload/v1701752610/Screenshot_1_klyggc.png'}
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='image'
            height={'500'}
            width={800}
            src={'https://res.cloudinary.com/dav9mftpk/image/upload/v1701752610/Screenshot_1_klyggc.png'}
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='image'
            height={'500'}
            width={800}
            src={'https://res.cloudinary.com/dav9mftpk/image/upload/v1701752610/Screenshot_1_klyggc.png'}
            className="w-full h-full"
          />
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Carousel;
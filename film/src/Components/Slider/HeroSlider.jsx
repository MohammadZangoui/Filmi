import React from 'react'
import './HeroSlider.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
export default function HeroSlider() {
    return (
        <>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    className='heroslier__swiper rounded-4'
                >
                    <SwiperSlide><img width={'100%'} height={'500px'} src="./public/img/slider/s1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="./public/img/slider/slider-2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="./public/img/slider/slider-3.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

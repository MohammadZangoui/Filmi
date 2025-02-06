import React from 'react'
import './NewFrends.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';

export default function NewFrends() {
    return (
        <div className='newfrends'>
            <div className='container'>
                <div className='text-center mt-5'>
                    <p className='fw-bold newfrends__title'> شرکت های همراه ما </p>
                    <h3 className='display-4 fw-bold'> بهترین <span className='newfrends__captian-span'> دوستان </span> </h3>
                </div>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className='mt-5'
                    >
                        <SwiperSlide><a href="#"><img width={'171px'} src="./public/img/BestFrends/02.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img width={'171px'} src="./public/img/BestFrends/03.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img width={'171px'} src="./public/img/BestFrends/04.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img width={'171px'} src="./public/img/BestFrends/05.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img width={'171px'} src="./public/img/BestFrends/06.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img width={'171px'} src="./public/img/BestFrends/05.png" alt="" /></a></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

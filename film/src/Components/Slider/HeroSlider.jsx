import React from 'react'
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
            <div className='container'>
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
                    className='rounded-4'
                >
                    <SwiperSlide><img width={'100%'} height={'500px'} src="https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img width={'100%'} height={'500px'} src="https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

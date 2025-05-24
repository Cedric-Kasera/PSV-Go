'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

function HeroBanner() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='h-[200px] w-full rounded-lg'
        >
            <SwiperSlide className='bg-red-500'>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-full' />
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroBanner

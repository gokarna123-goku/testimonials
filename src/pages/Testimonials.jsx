import React, { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { testimonialData } from '../constants/Testimonial';


const Testimonials = () => {

    const [isBeginning, setIsBeginning] = useState(true); // Track if on the first slide
    const [isEnd, setIsEnd] = useState(false); // Track if on the last slide

    const breakpointsResponsive = {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '@1.50': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };

    const handleSwiperEvents = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="w-full h-full space-y-5 relative lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-2xl text-neutral-300 font-semibold">
                    Testimonials
                </h2>

                {/* Custom Navigation Buttons */}
                <div className="flex items-center gap-6">
                    <button
                        className={`custom-prev text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full z-10 ${isBeginning ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                            }`}
                        disabled={isBeginning}
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <button
                        className={`custom-next text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full z-10 ${isEnd ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                            }`}
                        disabled={isEnd}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* property card */}
            <div className="w-full rounded-lg py-2">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={breakpointsResponsive}
                    onInit={(swiper) => handleSwiperEvents(swiper)}
                    onSlideChange={(swiper) => handleSwiperEvents(swiper)}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper p-1 [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-300"
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide key={item.id} className='p-1'>
                            <div className="w-full h-auto p-6 space-y-10 group bg-neutral-800/10 rounded-xl border border-neutral-800/70">
                                <p className="text-neutral-300 text-base font-normal">
                                    {item.desc}
                                </p>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover object-center rounded-full border"
                                        />
                                        <div className="space-y-1">
                                            <p className="text-neutral-300 text-base font-semibold">
                                                {item.name}
                                            </p>
                                            <p className="text-neutral-400 text-xs font-normal italic">
                                                {item.role} of Company {item.company}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 bg-yellow-500/5 rounded-full px-2 py-1">
                                        <FaStar className='text-yellow-600 text-sm' />
                                        <p className="text-xs text-yellow-600">{item.rating}</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
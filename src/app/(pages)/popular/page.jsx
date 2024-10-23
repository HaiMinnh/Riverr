"use client";
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";


const Popular = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
    };
    return (
        <div className="slider-container px-0 text-center">
            <h1>Popular professional services</h1>
            <Slider {...settings}>
                <div className="w-75">
                    <Image
                        src={'/images/crs1.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs2.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs3.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs4.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs5.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs6.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs7.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs8.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs9.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
                <div className="w-75">
                    <Image
                        src={'/images/crs10.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='rounded rounded-3 w-100'
                    />
                </div>
            </Slider>
        </div>
    )
}

export default Popular
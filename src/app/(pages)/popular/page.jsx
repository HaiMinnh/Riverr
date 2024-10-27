"use client";
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

const data = [
    { id:1,img: "/images/crs1.png",name:"Website Development"},
    { id:2,img: "/images/crs2.png",name:"Logo Design" },
    { id:3,img: "/images/crs3.png",name:"SEO" },
    { id:4,img: "/images/crs4.png",name:"Social Media Marketing" },
    { id:5,img: "/images/crs5.png",name:"voice Over" },
    { id:6,img: "/images/crs6.png",name:"Product Photography" },
    { id:7,img: "/images/crs7.png",name:"Mobile Service" },
    { id:8,img: "/images/crs8.png",name:"Video Editing"},
    { id:9,img: "/images/crs9.png",name:"UGC Videos" },
    { id:10,img: "/images/crs10.png",name:"Book Shop" }
]
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
                {data.map((item) => {
                    return <div className="w-75" key={item.id}>
                        <Image
                            src={item.img}
                            alt='logo'
                            width={200}
                            height={250}
                            className='rounded rounded-3 w-100'
                        />
                        <span>
                            {item.name}
                        </span>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default Popular
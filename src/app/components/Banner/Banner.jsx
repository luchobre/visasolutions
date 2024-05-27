"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  const bannerImgs = [
    { img: "/assets/banner/banner1.jpg" },
    { img: "/assets/banner/banner2.jpg" },
    { img: "/assets/banner/banner3.jpg" },
    { img: "/assets/banner/banner4.jpg" },
  ];
  return (
    <>
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {bannerImgs.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.img}
                height={600}
                width={2000}
                alt={`${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

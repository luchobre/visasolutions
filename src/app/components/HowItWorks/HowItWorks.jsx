"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HowItWorks.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import flag from "../../../../public/assets/usa-flag.jpg";
import Image from "next/image";

const HowItWorks = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const infoHiw = [
    {
      title:'THE OPPORTUNITY',
      img:'/assets/hiw1.png',
      text:'The demand for jobs in American companies has increased in recent years and that is why they need to hire more workers.',
    },
    {
      title:'RECRUITMENT',
      img:'/assets/hiw2.png',
      text:' These companies contact us to find reliable and committed workers to fill their vacancies and can offer you a job and sponsor your EB-3 visa (Green Card).',
    },
    {
      title:'MIGRATION',
      img:'/assets/hiw3.png',
      text:' We assist you with your EB-3 visa (Green Card) migration process, which will be based on the employment that the US company can sponsor for you.',
    },
    {
      title:'AMERICAN DREAM',
      img:'/assets/hiw4.png',
      text:'Once your EB-3 visa is approved, we will support you with your relocation process, which includes obtaining your Social Security Number, bank account, among other things.',
    },
  ]
  return (
    <>
      <div className="font-bold text-3xl sm:text-5xl flex justify-center mb-16 text-center mt-10" id="hiw">
        HOW DOES THE PROGRAM WORK?
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        speed={600}
        parallax={true}
        pagination={pagination}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${flag.src})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {
          infoHiw.map((item,index)=> (
        <SwiperSlide key={index}>
          <div className="title" data-swiper-parallax="-300">{item.title}</div>
          <div className="flex items-center flex-col lg:flex-row">
            <Image src={item.img} height={400} width={400} alt={`${item.title}`} />
            <div className="md:text-2xl text-sm backdrop-blur-xl p-4 text-white font-bold" data-swiper-parallax="-100">
              <p>{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
};

export default HowItWorks;

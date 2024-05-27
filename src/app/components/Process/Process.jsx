"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Process.css";

import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const processItems = [
  { img: "/assets/process/proc1.png" },
  { img: "/assets/process/proc2.png" },
  { img: "/assets/process/proc3.png" },
  { img: "/assets/process/proc4.png" },
  { img: "/assets/process/proc5.png" },
  { img: "/assets/process/proc6.png" },
  { img: "/assets/process/proc7.png" },
  { img: "/assets/process/proc8.png" },
];

const Process = () => {
  return (
    <>
      <div id="process">
        <h1 className="font-bold text-3xl sm:text-5xl flex justify-center mt-10">OUR PROCESS</h1>
        <div className="pl-14 pr-14 pt-14 md:ml-[20%] md:mr-[20%]">
          <p>
            Important things take time. Our program consists of 8 steps that
            will bring you closer and closer to living your American Dream.
            Remember that during the duration of your process, you can continue
            with your regular life. We take care of everything!
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {processItems.map((item, index) => (
            <SwiperSlide key={index} className="swiperslide">
              <div
                style={{ position: "relative", width: "80%", height: "100%" }}
              >
                <Image
                  src={item.img}
                  alt={`Process step ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Process;

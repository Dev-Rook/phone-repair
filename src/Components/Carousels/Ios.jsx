import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Styles from "../../Styles/Component-Styles/ProductSlider.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

const Ios = () => {
  const url = `https://fakestoreapi.com/products/category/electronics`;
  const [data, setData] = useAxios(url);

  return (
    <div className={Styles.Slider_Container}>
      <h3 className={Styles.Slider_Title}>Electronics</h3>
      <Swiper
        speed={1000}
        // spaceBetween={10}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          380: {
            width: 380,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          480: {
            width: 480,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {data &&
          data.map((value) => {
            return <SwiperSlide key={value?.id}></SwiperSlide>;
          })}
      </Swiper>
    </div>
  );
};

export default Ios;

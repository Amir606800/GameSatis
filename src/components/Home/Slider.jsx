import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const Slider = () => {
  return (
    <>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{height:"fit-content",maxHeight:"90vh",overflow:"hidden"}}
      >
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1501/razergold-bizesat-39570.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1514/banner_pubg_semaviasi-2449.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1513/banner_valorant_helezon-20579.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://img.gamesatis.com/slider/1517/banner_lol_efsanebaz_v2-23560.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1518/banner_cs2_seckinmodu-29889.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1467/wartune-ultra-elmas-24669.webp" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img src="https://img.gamesatis.com/slider/1499/cs2-hizli-sat-15036.webp" />
        </SwiperSlide>
      </Swiper> 
    </>
  );
};

export default Slider;

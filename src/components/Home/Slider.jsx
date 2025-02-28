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
        style={{maxHeight:"30vw",minHeight:"8em",height:"20em",overflow:"hidden"}}
      >
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1501/razergold-bizesat-39570.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1529/banner_ko_pusindirimleri_v2-50324.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1525/banner_mlbb_kof_v2-62819.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://img.gamesatis.com/slider/1527/banner_pubg_boxerbolt_v2-2181.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1524/banner_lol_maskeliadalet-91907.webp" />
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

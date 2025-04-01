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
          <img src="https://img.gamesatis.com/slider/1553/banner_razamanbayrami_v6-2790.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1554/banner_valorant_flas2-29201.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1548/banner_mobleg_yeniyildizuyelik_v14-89350.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://img.gamesatis.com/slider/1552/banner_pubg_godzilla-81301.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1544/banner_netflix_stoklaryenilendi-26352.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1551/banner_pubg_anukhra-63185.webp" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://img.gamesatis.com/slider/1499/cs2-hizli-sat-15036.webp" />
        </SwiperSlide>
      </Swiper> 
    </>
  );
};

export default Slider;

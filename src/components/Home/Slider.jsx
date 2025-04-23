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
import BannerIndiana from '/indianaBanner.webp'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const Slider = () => {
  return (
    <>

      <Swiper
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
          <img src="https://img.gamesatis.com/slider/1565/banner_lol_yazgibozan-74134.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1562/banner_valorant_gecepazari_v20-21919.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gamesatis.com/slider/1533/banner_wartune_epin-41443.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={BannerIndiana} />
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

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
import BannerIndiana from "/indianaBanner.webp";
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
        style={{
          maxHeight: "30vw",
          minHeight: "8em",
          height: "20em",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <img src="/banner_fortnite_galaktiksavas-99699.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner_lol_ruhcicegi-25431.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner_mlbb_narutodevam-68890.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerIndiana} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner_pubg_rpa13_v2-74285.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner_pubg_shelby-66084.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner_valorant_iyiligipaylas2025-66950.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner_steam_yaratiktoplama-64356.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

import React from "react";
// Import Swiper for slider
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode } from "swiper";
// CSS Module
import styles from "@/styles/products.module.css";

const SliderFilterButton = () => {
  return (
    <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper px-2 pt-3"
      >
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld} ${styles.active}`}>
            <p className={styles.label}>All</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Top 50 medicines</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Natural oils and herbs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Cosmtics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Vitamins</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Skin care</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Kids</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Sun and sea</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Expensive drugs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`${styles.boxLabeld}`}>
            <p className={styles.label}>Daily essentials</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderFilterButton;

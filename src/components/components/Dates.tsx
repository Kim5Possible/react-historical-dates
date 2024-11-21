import React from "react";
import "./Dates.scss";
import items from "../../dates.json";
import ArrowLeft from "../../../public/assets/arrow-left.svg";
import ArrowRight from "../../../public/assets/arrow-right.svg";

import "swiper/css";
import "swiper/scss";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type Props = {};

const Dates = (props: Props) => {
  return (
    <div className="dates">
      <button className="swiper-button-prev">
        <img src={ArrowLeft} alt="Previous" />
      </button>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={80}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.theme[0].dates.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="dates__item">
                <span>{item.year}</span>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="swiper-button-next">
        <img src={ArrowRight} alt="Next" />
      </button>
    </div>
  );
};

export default Dates;

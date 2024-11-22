import React from "react";
import "./Dates.scss";
import items from "../../dates.json";
import ArrowLeft from "../../../public/assets/arrow-left.svg";
import ArrowRight from "../../../public/assets/arrow-right.svg";

import "swiper/css";
import "swiper/scss";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type Props = {
  themeIndex: number;
};

const Dates = ({ themeIndex }: Props) => {
  const theme = items.theme[themeIndex];
  const [isFirstSlide, setIsFirstSlide] = React.useState(true);
  const [isLastSlide, setIsLastSlide] = React.useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };
  return (
    <div className="dates">
      <button
        className={`swiper-button-prev ${isFirstSlide ? "inactive" : ""}`}
      >
        <img src={ArrowLeft} alt="Previous" />
      </button>

      <Swiper
        spaceBetween={80}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
              enabled: true,
              dynamicBullets: true,
              clickable: true,
            },
          },
          768: {
            slidesPerView: 2,
            pagination: {
              el: ".swiper-pagination",
              enabled: true,
              dynamicBullets: true,
              clickable: true,
            },
          },
          1024: {
            slidesPerView: 3,
            pagination: {
              el: ".swiper-pagination",
              enabled: false,
            },
          },
        }}
        className="swiper"
      >
        {theme.dates.map((item, index) => {
          return (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="dates__item">
                <span>{item.year}</span>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination"></div>
      </Swiper>
      <button className={`swiper-button-next ${isLastSlide ? "inactive" : ""}`}>
        <img src={ArrowRight} alt="Next" />
      </button>
    </div>
  );
};

export default Dates;

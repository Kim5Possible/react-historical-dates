import React from "react";
import "./TimePeriod.scss";
import ArrowLeft from "../../../public/assets/arrow-left.svg";
import ArrowRight from "../../../public/assets/arrow-right.svg";

type Props = {
  setThemeIndex: (index: number) => void;
  themeIndex: number;

  themes: { name: string }[];
};

const TimePeriod = ({ setThemeIndex, themeIndex, themes }: Props) => {
  const handleClickNext = () => {
    themeIndex == themes.length - 1
      ? setThemeIndex(0)
      : setThemeIndex(themeIndex + 1);
  };

  const handleClickPrev = () => {
    themeIndex == 0
      ? setThemeIndex(themes.length - 1)
      : setThemeIndex(themeIndex - 1);
  };
  return (
    <div className="time-period">
      <div className="time-period__title">
        <p className="time-period__title--left">2015</p>{" "}
        <p className="time-period__title--right"> 2022</p>
      </div>
      <div className="time-period__page">
        <span>{themeIndex + 1}/06</span>
        <div className="time-period__arrows">
          <button onClick={handleClickPrev}>
            <img
              className="time-period__arrows--left"
              src={ArrowLeft}
              alt="icon"
            />
          </button>
          <button onClick={handleClickNext}>
            <img
              className="time-period__arrows--right"
              src={ArrowRight}
              alt="icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimePeriod;

import React from "react";
import "./TimePeriod.scss";
import ArrowLeft from "../../../public/assets/arrow-left.svg";
import ArrowRight from "../../../public/assets/arrow-right.svg";

type Props = {};

const TimePeriod = (props: Props) => {
  return (
    <div className="time-period">
      <div className="time-period__title">
        <p className="time-period__title--left">2015</p>{" "}
        <p className="time-period__title--right"> 2022</p>
      </div>
      <div className="time-period__page">
        <span>06/06</span>
        <div className="time-period__arrows">
          <button>
            <img
              className="time-period__arrows--left"
              src={ArrowLeft}
              alt="icon"
            />
          </button>{" "}
          <button>
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

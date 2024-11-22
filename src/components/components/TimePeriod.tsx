import React, { useEffect, useRef, useState } from "react";
import "./TimePeriod.scss";
import gsap from "gsap";
import ArrowLeft from "../../../public/assets/arrow-left.svg";
import ArrowRight from "../../../public/assets/arrow-right.svg";

type Props = {
  setThemeIndex: (index: number) => void;
  themeIndex: number;

  themes: { name: string; dates: { year: number }[] }[];
};

const TimePeriod = ({ setThemeIndex, themeIndex, themes }: Props) => {
  const [yearStart, setYearStart] = useState<number>();
  const [yearEnd, setYearEnd] = useState<number>();

  const handleClickNext = () => setThemeIndex((themeIndex + 1) % themes.length);

  const handleClickPrev = () =>
    setThemeIndex((themeIndex - 1 + themes.length) % themes.length);

  useEffect(() => {
    setYearStart(themes[themeIndex]?.dates[0].year);
    setYearEnd(
      themes[themeIndex]?.dates[themes[themeIndex].dates.length - 1].year
    );
  }, [themeIndex, themes]);

  function countYears(year?: number): JSX.Element | null {
    if (year === undefined) return null;

    const className =
      year === yearStart
        ? "time-period__title--left"
        : "time-period__title--right";

    gsap.to(`.${className}`, {
      innerText: year,
      duration: 0.3,
      snap: { innerText: 1 },
    });

    return <React.Fragment>{year}</React.Fragment>;
  }

  return (
    <div className="time-period">
      <div className="time-period__title">
        <p className="time-period__title--left">{countYears(yearStart)}</p>{" "}
        <p className="time-period__title--right">{countYears(yearEnd)}</p>
      </div>
      <div className="time-period__page">
        <span>0{themeIndex + 1}/06</span>
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

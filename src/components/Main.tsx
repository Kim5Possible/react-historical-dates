import React, { useEffect, useState } from "react";
import "./Main.scss";
import dates from "../dates.json";
import TimePeriod from "./components/TimePeriod";
import Dates from "./components/Dates";
import Circle from "./components/Circle";

type Props = {};

const Main = (props: Props) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [themes, setThemes] = useState<
    { name: string; dates: { year: string; description: string }[] }[]
  >([]);

  const handleDotClick = (index: number) => {
    setThemeIndex(index);
  };

  useEffect(() => {
    setThemes(dates.theme);
  }, []);
  return (
    <section className="main">
      <div className="main__title">
        Исторические <br /> даты
      </div>
      <Circle
        themes={themes}
        onClick={handleDotClick}
        themeIndex={themeIndex}
      />
      <TimePeriod
        themes={themes}
        setThemeIndex={setThemeIndex}
        themeIndex={themeIndex}
      />

      <Dates themeIndex={themeIndex} />
    </section>
  );
};

export default Main;

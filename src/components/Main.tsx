import React, { useState } from "react";
import "./Main.scss";
import TimePeriod from "./components/TimePeriod";
import Dates from "./components/Dates";

type Props = {};

const Main = (props: Props) => {
  const  [theme, setTheme] = useState([]);
  return (
    <section className="main">
      <div className="main__title">
        Исторические <br /> даты
      </div>
      <TimePeriod />
      <Dates />
    </section>
  );
};

export default Main;

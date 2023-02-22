import React from "react";
import cls from "./RightSide.module.scss";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";

function RightSide() {
  return (
    <div className={cls.root}>
      <FirstCard />
      <SecondCard />
    </div>
  );
}

export default RightSide;

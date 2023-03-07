import React from "react";
import cls from "./RightSide.module.scss";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";

function RightSide({ setOpen = () => {} }) {
  return (
    <div className={cls.root}>
      <FirstCard />
      <SecondCard setOpen={setOpen} />
    </div>
  );
}

export default RightSide;

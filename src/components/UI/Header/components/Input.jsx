import React from "react";
import cls from "./styles.module.scss";
import { ArrowBottomIcon, SearchIcon, LocationIcon } from "components/UI/Icons";

function Input() {
  return (
    <div className={cls.Input}>
      <div className={cls.selectBtn}>
        <LocationIcon />
        <p>Весь Узбекистан</p>
        <ArrowBottomIcon />
      </div>
      <input
        className={cls.input}
        placeholder="Поиск по объявлениям"
        type="text"
      />
      <div className={cls.searchBtn}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Input;

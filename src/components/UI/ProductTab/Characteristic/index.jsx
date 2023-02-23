import React from "react";
import cls from "./Characteristic.module.scss";
import { characteristics } from "../data";

function Characteristic() {
  return (
    <div className={cls.root}>
      <h1>Характеристика</h1>
      <div className={cls.table}>
        {characteristics.map((el, index) => (
          <div key={index + "character"}>
            <div className={cls.header}>
              <h3>{el.title}</h3>
            </div>
            <div className={cls.items}>
              {el.child.map((item, i) => (
                <div key={i + "child"} className={cls.item}>
                  <p className={cls.name}>{item.name}</p>
                  <p className={cls.value}>
                    <a href={item.url}>{item.value}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characteristic;

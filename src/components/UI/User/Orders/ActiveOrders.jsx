import React from "react";
import cls from "./Orders.module.scss";

function ActiveOrders() {
  return (
    <div>
      <div className={cls.emptyBox}>
        <h3>Активных заказов пока нет :(</h3>
      </div>
    </div>
  );
}

export default ActiveOrders;

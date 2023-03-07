import React from "react";
import cls from "./Orders.module.scss";

function ActiveOrders() {
  return (
    <div>
      <div className={cls.emptyBox}>
        <h3>Нет активных заказов</h3>
      </div>
    </div>
  );
}

export default ActiveOrders;

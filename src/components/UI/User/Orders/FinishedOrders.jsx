import React from "react";
import cls from "./Orders.module.scss";

function FinishedOrders() {
  return (
    <div>
      <div className={cls.emptyBox}>
        <h3>Завершенных заказов пока нет :(</h3>
      </div>
    </div>
  );
}

export default FinishedOrders;

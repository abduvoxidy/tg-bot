import React from "react";
import cls from "./Orders.module.scss";

function FinishedOrders() {
  return (
    <div>
      <div className={cls.emptyBox}>
        <h3>Нет завершенных заказов</h3>
      </div>
    </div>
  );
}

export default FinishedOrders;

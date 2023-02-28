import React from "react";
import cls from "./CheckoutForm.module.scss";
import CheckoutCard from "./CheckoutCard";
import PersonalData from "./PersonalData";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutPrice from "./CheckoutPrice";
import CheckoutOrders from "./CheckoutOrders";
import Textarea from "../Forms/Textarea";
import CheckoutPayment from "./CheckoutPayment";

function CheckoutForm() {
  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <CheckoutCard title="Ваши данные">
          <PersonalData />
        </CheckoutCard>
        <CheckoutCard title="Способ доставки">
          <CheckoutDelivery />
        </CheckoutCard>
        <CheckoutCard title="Ваш заказ">
          <CheckoutOrders />
        </CheckoutCard>
        <CheckoutCard title="Способ оплаты">
          <CheckoutPayment />
        </CheckoutCard>
        <CheckoutCard title="Примечания к заказу">
          <Textarea placeholder="Примечания к заказу, например, особые пожелания отделу доставки" />
        </CheckoutCard>
      </div>
      <div className={cls.right}>
        <CheckoutPrice />
      </div>
    </div>
  );
}

export default CheckoutForm;

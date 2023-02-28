import React from "react";
import { PaymentTabs, PaymentTab } from "components/UI/CTabs/PaymentTabs";
import cls from "./CheckoutPayment.module.scss";
import { useState } from "react";

function CheckoutPayment() {
  const [tabValue, setTabValue] = useState("online");
  return (
    <div className={cls.root}>
      <div className={cls.tabs}>
        <PaymentTabs
          onChange={(e, val) => {
            setTabValue(val);
          }}
          value={tabValue}
        >
          <PaymentTab value="online" label="Онлайн" />
          <PaymentTab value="installment" label="Рассрочка" />
        </PaymentTabs>
      </div>
    </div>
  );
}

export default CheckoutPayment;

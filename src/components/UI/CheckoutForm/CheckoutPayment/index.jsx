import React from "react";
import { PaymentTabs, PaymentTab } from "components/UI/CTabs/PaymentTabs";
import cls from "./CheckoutPayment.module.scss";
import { useState, useCallback } from "react";
import Payments from "./Payments";
import { onlinePayments, installmentPayments } from "./data";

function CheckoutPayment() {
  const [tabValue, setTabValue] = useState("online");
  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );
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
      <div className={cls.body}>
        <TabBody tab="online">
          <Payments data={onlinePayments} />
        </TabBody>
        <TabBody tab="installment">
          <Payments data={installmentPayments} />
        </TabBody>
      </div>
    </div>
  );
}

export default CheckoutPayment;

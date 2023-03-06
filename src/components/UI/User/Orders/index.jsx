import React, { useState } from "react";
import cls from "./Orders.module.scss";
import { Container } from "@mui/material";
import LeftSidebar from "../LeftSidebar";
import { useCallback } from "react";
import classNames from "classnames";
import Installments from "./Installments";
import ActiveOrders from "./ActiveOrders";
import FinishedOrders from "./FinishedOrders";

const tabs = [
  {
    title: "Рассрочка",
    value: "installments",
  },
  {
    title: "Активные заказы",
    value: "active_orders",
  },
  {
    title: "Завершенные заказы",
    value: "finished_orders",
  },
];

export function Orders() {
  const [tabValue, setTabValue] = useState("installments");
  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );
  return (
    <main className={cls.main}>
      <Container>
        <h1>Мои заказы</h1>
        <div className={cls.box}>
          <LeftSidebar />
          <div className={cls.rightSide}>
            <div className={cls.tabs}>
              {tabs.map((el) => (
                <div
                  onClick={() => {
                    setTabValue(el.value);
                  }}
                  className={classNames(cls.tab, {
                    [cls.active]: el.value === tabValue,
                  })}
                >
                  {el.title}
                </div>
              ))}
            </div>
            <div className={cls.body}>
              <TabBody tab="installments">
                <Installments />
              </TabBody>
              <TabBody tab="active_orders">
                <ActiveOrders />
              </TabBody>
              <TabBody tab="finished_orders">
                <FinishedOrders />
              </TabBody>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

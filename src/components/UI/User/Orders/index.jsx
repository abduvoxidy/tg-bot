import React, { useState } from "react";
import cls from "./Orders.module.scss";
import { Container } from "@mui/material";
import LeftSidebar from "../LeftSidebar";
import classNames from "classnames";
import Installments from "./Installments";
import ActiveOrders from "./ActiveOrders";
import FinishedOrders from "./FinishedOrders";
import TabBody from "components/UI/CTabs/TabBody";

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
  return (
    <main className={cls.main}>
      <Container>
        <h1>Мои заказы</h1>
        <div className={cls.box}>
          <LeftSidebar />
          <div className={cls.rightSide}>
            <div className={cls.tabs}>
              {tabs.map((el, i) => (
                <div
                  key={i}
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
              <TabBody tab="installments" tabValue={tabValue}>
                <Installments />
              </TabBody>
              <TabBody tab="active_orders" tabValue={tabValue}>
                <ActiveOrders />
              </TabBody>
              <TabBody tab="finished_orders" tabValue={tabValue}>
                <FinishedOrders />
              </TabBody>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

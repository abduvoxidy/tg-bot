import { Container } from "@mui/material";
import React from "react";
import cls from "./Order.module.scss";
import OrderPaymentInfo from "./OrderPaymentInfo";
import {
  OrderStepCheckIcon,
  OrderStepRestaurantIcon,
  OrderStepCourierIcon,
  OrderStepFinishedIcon,
} from "components/UI/Icons";

export function Order() {
  const statusIndex = 3;
  const defaultColor = {
    circleColor: "#F4F4F4",
    fill: "#000",
  };
  const activeColor = {
    circleColor: "#ff9910",
    fill: "#fff",
  };
  return (
    <main className={cls.main}>
      <Container>
        <div className={cls.header}>
          <div className={cls.left}>
            <h2>Секундочку...</h2>
            <p>Идет оплата</p>
          </div>
          <div className={cls.right}>
            <OrderStepCheckIcon
              circleColor={
                statusIndex === 1 || statusIndex <= 4
                  ? activeColor.circleColor
                  : defaultColor.circleColor
              }
              fill={
                statusIndex === 1 || statusIndex <= 4
                  ? activeColor.fill
                  : defaultColor.fill
              }
            />
            <div
              style={{
                backgroundColor:
                  (statusIndex <= 4 && statusIndex !== 1) || statusIndex === 2
                    ? activeColor.circleColor
                    : defaultColor.circleColor,
              }}
            />
            <OrderStepRestaurantIcon
              circleColor={
                (statusIndex <= 4 && statusIndex !== 1) || statusIndex === 2
                  ? activeColor.circleColor
                  : defaultColor.circleColor
              }
              fill={
                (statusIndex <= 4 && statusIndex !== 1) || statusIndex === 2
                  ? activeColor.fill
                  : defaultColor.fill
              }
            />
            <div
              style={{
                backgroundColor:
                  (statusIndex <= 4 &&
                    statusIndex !== 1 &&
                    statusIndex !== 2) ||
                  statusIndex === 3
                    ? activeColor.circleColor
                    : defaultColor.circleColor,
              }}
            />
            <OrderStepCourierIcon
              circleColor={
                (statusIndex <= 4 && statusIndex !== 1 && statusIndex !== 2) ||
                statusIndex === 3
                  ? activeColor.circleColor
                  : defaultColor.circleColor
              }
              fill={
                (statusIndex <= 4 && statusIndex !== 1 && statusIndex !== 2) ||
                statusIndex === 3
                  ? activeColor.fill
                  : defaultColor.fill
              }
            />
            <div
              style={{
                backgroundColor:
                  statusIndex === 4
                    ? activeColor.circleColor
                    : defaultColor.circleColor,
              }}
            />
            <OrderStepFinishedIcon
              circleColor={
                statusIndex === 4
                  ? activeColor.circleColor
                  : defaultColor.circleColor
              }
              fill={statusIndex === 4 ? activeColor.fill : defaultColor.fill}
            />
          </div>
        </div>
        <OrderPaymentInfo />
      </Container>
    </main>
  );
}

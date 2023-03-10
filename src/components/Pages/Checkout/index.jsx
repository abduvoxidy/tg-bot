import React from "react";
import CheckoutForm from "components/UI/CheckoutForm";
import cls from "./Checkout.module.scss";
import { Container } from "@mui/material";

export function Checkout() {
  return (
    <main className={cls.main}>
      <Container>
        <h1 className={cls.title}>Оформление заказа</h1>
        <CheckoutForm />
      </Container>
    </main>
  );
}

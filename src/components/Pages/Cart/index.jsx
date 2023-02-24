import React from "react";
import { Container } from "@mui/material";
import cls from "./styles.module.scss";
import ProductSimilar from "components/UI/Products/ProductSimilar";
import CartBox from "components/UI/Cart/CartBox";

function Cart() {
  return (
    <main className={cls.main}>
      <Container>
        <h1 className={cls.title}>Корзина</h1>
        <CartBox />
        <ProductSimilar
          className={cls.products}
          title="С этим товаром покупают ещё"
        />
        <ProductSimilar className={cls.products} />
      </Container>
    </main>
  );
}

export default Cart;

import React, { useState } from "react";
import cls from "./Favorites.module.scss";
import LeftSidebar from "../LeftSidebar";
import { Container } from "@mui/material";
import ProductCard from "components/UI/Cards/ProductCard";
import { HeartIcon } from "components/UI/Icons";

const favorites = [
  "car.png",
  "chip.png",
  "cleaner.png",
  "iron.png",
  "adidas.png",
  "car.png",
];

export function Favorites() {
  return (
    <>
      <main className={cls.main}>
        <Container>
          <h1>Избранное</h1>
          <div className={cls.box}>
            <LeftSidebar />
            <div className={cls.rightSide}>
              {favorites && favorites.length ? (
                favorites.map((el, i) => (
                  <ProductCard zIndex={favorites.length - i} img={el} key={i} />
                ))
              ) : (
                <div className={cls.emptyWrapper}>
                  <div className={cls.empty}>
                    <h3>Готовы к покупке?</h3>
                    <p className={cls.emptyText}>
                      Жмите{" "}
                      <span>
                        <HeartIcon />
                      </span>
                      на странице товара и добавляйте сюда то, что вам
                      понравилось. И если цена на этот товар упадет, мы вам
                      отправим сообщение, которое можете увидеть в разделе
                      <span className={cls.notification}>Уведомления</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

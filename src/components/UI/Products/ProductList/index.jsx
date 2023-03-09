import React from "react";
import cls from "./ProductList.module.scss";
import ProductCard from "components/UI/Cards/ProductCard";

function ProductList() {
  const images = ["car.png", "chip.png", "cleaner.png", "iron.png"];
  return (
    <div className={cls.root}>
      <h1>Новинки</h1>
      <div className={cls.row}>
        {images.map((el) => (
          <ProductCard key={el} img={el} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

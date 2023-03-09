import React from "react";
import cls from "./BrandProducts.module.scss";
import ProductCard from "components/UI/Cards/ProductCard";

function BrandProducts() {
  const images = [
    "car.png",
    "chip.png",
    "cleaner.png",
    "iron.png",
    "iron.png",
    "chip.png",
    "cleaner.png",
    "car.png",
    "chip.png",
  ];
  return (
    <div className={cls.root}>
      <div className={cls.row}>
        {images.map((el, index) => (
          <ProductCard zIndex={images.length - index} key={index} img={el} />
        ))}
      </div>
    </div>
  );
}

export default BrandProducts;

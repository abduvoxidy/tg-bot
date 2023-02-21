import React from "react";
import cls from "./ProductSlider.module.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import { useRef } from "react";
import ProductCard from "./ProductCard";

function ProductSlider({ title }) {
  const images = ["car.png", "chip.png", "cleaner.png", "iron.png"];
  return (
    <div className={cls.root} id="productSlider">
      <h1 className={cls.title}>{title || "Популярные товары"}</h1>
      <Slider
        {...{
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow styles={cls.next} />,
          prevArrow: <SamplePrevArrow styles={cls.prev} />,
        }}
      >
        {images.map((el, index) => (
          <div className={cls.slideItem} key={index}>
            <ProductCard img={el} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;

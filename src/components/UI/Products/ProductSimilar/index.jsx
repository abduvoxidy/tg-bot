import React from "react";
import cls from "./ProductSimilar.module.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import ProductSliderCard from "components/UI/Cards/ProductSliderCard";
// import ProductCard from "./ProductCard";

function ProductSimilar({ title }) {
  const images = [
    "car.png",
    "chip.png",
    "cleaner.png",
    "iron.png",
    "chip.png",
    "cleaner.png",
  ];
  return (
    <div className={cls.root} id="productSlider">
      <h1 className={cls.title}>{title || "Похожие товары"}</h1>
      <Slider
        {...{
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow styles={cls.next} />,
          prevArrow: <SamplePrevArrow styles={cls.prev} />,
        }}
      >
        {images.map((el, index) => (
          <div className={cls.slideItem} key={index}>
            <ProductSliderCard img={el} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSimilar;

import React from "react";
import cls from "./PopularOffers.module.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import Card from "./Card";
import Link from "next/link";
import ProductCard from "../Cards/ProductCard";
import CategoryList from "../CategoryList";

function PopularOffers({ title }) {
  const images = ["car.png", "chip.png", "cleaner.png", "iron.png"];
  const productImages = [
    "car.png",
    "chip.png",
    "cleaner.png",
    "chip.png",
    "cleaner.png",
    "car.png",
  ];
  return (
    <div className={cls.root} id="productSlider">
      <h3 className={cls.title}>{title || "Популярные предложения"}</h3>
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
            <Link href="/">
              <a>
                <Card img={el} />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
      <CategoryList />
      <div className={cls.row}>
        {productImages.map((el, index) => (
          <ProductCard
            zIndex={productImages.length - index}
            key={index}
            img={el}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularOffers;

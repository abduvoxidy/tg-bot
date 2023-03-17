import React from "react";
import cls from "./FeatureProducts.module.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import ProductSliderCard from "components/UI/Cards/ProductSliderCard";
import { useFeatureListProductsQuery } from "services/feature-list-products.service";
import { sortFunctionArr } from "utils/sortFunction";

function FeatureProducts({ title, data, className = "" }) {
  const images = [
    "car.png",
    "chip.png",
    "cleaner.png",
    "iron.png",
    "chip.png",
    "cleaner.png",
  ];
  const { data: featureProducts } = useFeatureListProductsQuery({
    data: {
      featured_lists_id: data.guid,
    },
    queryParams: {
      enabled: !!data.guid,
    },
  });

  const response = sortFunctionArr(featureProducts?.data?.response);

  return (
    <div className={`${cls.root} ${className}`}>
      <h1 className={cls.title}>{title || "Похожие товары"}</h1>
      <Slider
        {...{
          dots: false,
          speed: 500,
          slidesToShow: 4,
          // centerMode: true,
          variableWidth: response.length < 4 ? true : false,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <SampleNextArrow styles={cls.next} />,
          prevArrow: <SamplePrevArrow styles={cls.prev} />,
        }}
      >
        {response.map((el, index) => (
          <div className={cls.slideItem} key={index}>
            <ProductSliderCard data={el?.products_id_data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeatureProducts;

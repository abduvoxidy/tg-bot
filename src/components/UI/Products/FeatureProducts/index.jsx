import React from "react";
import cls from "./FeatureProducts.module.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import ProductSliderCard from "components/UI/Cards/ProductSliderCard";
import { useFeatureListProductsQuery } from "services/feature-list-products.service";
import { sortFunctionArr } from "utils/sortFunction";
import ProductCardSkeleton from "components/UI/Loaders/ProductCardSkeleton";

function FeatureProducts({ title, data, className = "" }) {
  const { data: response, isLoading } = useFeatureListProductsQuery({
    data: {
      featured_lists_id: data.guid,
    },
    queryParams: {
      enabled: !!data.guid,
    },
  });

  const featureProducts = response && response.length > 0 ? response : [];
  if (isLoading) return <ProductCardSkeleton />;

  return (
    <div className={`${cls.root} ${className}`}>
      <h1 className={cls.title}>{title || "Похожие товары"}</h1>
      <Slider
        {...{
          dots: false,
          speed: 500,
          slidesToShow: 4,
          variableWidth: featureProducts.length < 4 ? true : false,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <SampleNextArrow styles={cls.next} />,
          prevArrow: <SamplePrevArrow styles={cls.prev} />,
        }}
      >
        {sortFunctionArr(featureProducts).map((el, index) => (
          <div className={cls.slideItem} key={index}>
            <ProductSliderCard data={el?.products_id_data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeatureProducts;

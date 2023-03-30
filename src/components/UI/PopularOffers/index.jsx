import React from "react";
import cls from "./PopularOffers.module.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import Card from "./Card";
import Link from "next/link";
import ProductCard from "../Cards/ProductCard";
import CategoryList from "../CategoryList";
import { useProductsQuery } from "services/products.service";
import { useRouter } from "next/router";
import SimpleLoader from "../Loaders/SimpleLoader";

function PopularOffers({ title }) {
  const router = useRouter();
  const category_id = router.query?.id;

  const { data: products, isLoading } = useProductsQuery({
    data: {
      category_id: [category_id],
    },
    queryParams: {
      enabled: !!category_id,
      select: (res) => res.data?.data?.response,
    },
  });

  const images = ["car.png", "chip.png", "cleaner.png", "iron.png"];
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
        {isLoading ? (
          <SimpleLoader />
        ) : products && products.length > 0 ? (
          products.map((el, index) => (
            <ProductCard
              data={el}
              zIndex={products.length - index}
              key={index}
            />
          ))
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </div>
  );
}

export default PopularOffers;

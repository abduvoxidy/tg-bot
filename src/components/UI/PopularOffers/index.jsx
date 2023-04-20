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
import EmptyData from "components/UI/EmptyData";

function PopularOffers({ title, products, isLoading }) {
  const router = useRouter();
  const category_id = router.query?.id;
  console.log("prod", products);
  // const { data: products, isLoading } = useProductsQuery({
  //   data: {
  //     category_id: [category_id],
  //   },
  //   queryParams: {
  //     enabled: !!category_id,
  //   },
  //   select: (res) => res.response,
  // });

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

      <div className={cls.container}>
        {isLoading ? (
          <SimpleLoader className={cls.loader} />
        ) : products && products.length > 0 ? (
          <div className={cls.row}>
            {products.map((el, index) => (
              <ProductCard
                data={el}
                zIndex={products.length - index}
                key={index}
              />
            ))}
          </div>
        ) : (
          <EmptyData />
        )}
      </div>
    </div>
  );
}

export default PopularOffers;

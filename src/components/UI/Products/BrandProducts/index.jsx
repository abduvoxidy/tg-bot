import React from "react";
import cls from "./BrandProducts.module.scss";
import ProductCard from "components/UI/Cards/ProductCard";
import { useBrandProductsQuery } from "services/product_by_brand.service";
import { useRouter } from "next/router";

function BrandProducts({ data = [] }) {
  // const router = useRouter();
  // const { data: brandData, isLoading } = useBrandProductsQuery({
  //   queryParams: {},
  //   data: {
  //     brand_slug: router?.query?.id,
  //     limit: 10,
  //     page: 1,
  //   },
  // });
  // console.log("router", router);
  // console.log("branddata", brandData);
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
  console.log("data,", data);
  return (
    <div className={cls.root}>
      <div className={cls.row}>
        {data?.map((el, index) => (
          <ProductCard zIndex={data.length - index} key={index} data={el} />
        ))}
      </div>
    </div>
  );
}

export default BrandProducts;

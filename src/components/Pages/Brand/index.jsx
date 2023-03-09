import { Container } from "@mui/material";
import React from "react";
import cls from "./Brand.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import SidebarCategory from "components/UI/SideBars/SidebarCategory";
import TextContent from "components/UI/TextContent";
import BrandProducts from "components/UI/Products/BrandProducts";
import BrandBanner from "components/UI/Banners/BrandBanner";
import CategoryList from "components/UI/CategoryList";
import ProductImages from "components/UI/Products/ProductImages";

const categories = [
  "смартфоны samsung",
  "смартфоны xiaomi",
  "iphone",
  "смартфоны poco",
  "смартфоны oppo",
  "смартфоны samsung",
  "смартфоны xiaomi",
  "iphone",
  "телефон",
];

const brands = [
  {
    name: "Электромобилы",
    url: "car.png",
  },
  {
    name: "Электрония для авто",
    url: "power.png",
  },
  {
    name: "Электронные самокаты",
    url: "samakat.png",
  },
  {
    name: "Электрония для авто",
    url: "power.png",
  },
  {
    name: "Электромобилы",
    url: "car.png",
  },
  {
    name: "SSD накопители",
    url: "ssd.png",
  },
  {
    name: "Электромобилы",
    url: "car.png",
  },
  {
    name: "Электрония для авто",
    url: "power.png",
  },
  {
    name: "Электронные самокаты",
    url: "samakat.png",
  },
  {
    name: "Электрония для авто",
    url: "power.png",
  },
  {
    name: "Электромобилы",
    url: "car.png",
  },
  {
    name: "SSD накопители",
    url: "ssd.png",
  },
];
export function Brand() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title="Главная / Бренды " />
        <h1 className={cls.title}> Бренды</h1>
        <BrandBanner className={cls.banner} />
        <CategoryList categories={categories} className={cls.category} />
        <ProductImages products={brands} className={cls.brands} />
        <div className={cls.brandRow}>
          <SidebarCategory />
          <div>
            <BrandProducts />
            <TextContent />
          </div>
        </div>
      </Container>
    </main>
  );
}

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
import { useRouter } from "next/router";
import { useBrandProductsQuery } from "services/product_by_brand.service";

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

const breadcrumbItems = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/brands",
    label: "Бренды",
  },
];

export function Brand() {
  const router = useRouter();
  const { data: brandData, isLoading } = useBrandProductsQuery({
    queryParams: {},
    data: {
      brand_slug: router?.query?.id,
      limit: 10,
      page: 1,
    },
  });
  console.log("router", router);
  console.log("branddata", brandData);
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs items={breadcrumbItems} />
        <h1 className={cls.title}> Бренды</h1>

        <BrandBanner className={cls.banner} />

        <CategoryList categories={categories} className={cls.category} />
        <ProductImages products={brandData?.categorys} className={cls.brands} />
        <div className={cls.brandRow}>
          <SidebarCategory />
          <div>
            <BrandProducts data={brandData?.products} />
            <TextContent />
          </div>
        </div>
      </Container>
    </main>
  );
}

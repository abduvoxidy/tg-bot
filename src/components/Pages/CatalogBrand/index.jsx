import React from "react";
import cls from "./CatalogBrand.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs/Index2";
import { Container } from "@mui/material";
import SidebarCatalog from "components/UI/SideBars/SidebarCatalog";
import CatalogBanner from "components/UI/Banners/CatalogBanner";
import CatalogList from "components/UI/CatalogList";
import { catalogs } from "./data";
import ProductSlider from "components/UI/Products/ProductSlider";
import { useCategoriesQuery } from "services/category.service";
import { getNestedCategories } from "utils/getNestedData";
import { useState } from "react";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";

export function CatalogBrand() {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const getKey = useKeyTranslation();

  const { data, isLoading } = useCategoriesQuery({
    data: {},
    routerId: router.query.id,
    queryParams: {
      enabled: !!router.query.id,
      onSuccess: (res) => {
        const response1 = getNestedCategories(
          {
            guid: null,
          },
          res.data.response
        );

        const Category =
          response1 &&
          response1.children.find((el) => el.guid === router.query.id);

        setCategory(Category);

        const response2 = getNestedCategories(
          {
            guid: router.query.id,
          },
          res.data.response
        );

        setSubCategories(response2.children || []);
      },
    },
  });

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <h1 className={cls.title}>
          {category ? category?.[getKey("name")] : ""}
        </h1>
        <div className={cls.row}>
          <SidebarCatalog subCategories={subCategories} isLoading={isLoading} />
          <div className={cls.body}>
            <CatalogBanner />
            {subCategories.map((el, index) => (
              <WrapperComponent
                key={el.guid}
                index={index}
                title={el?.[getKey("name")]}
                categories={el.children}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

const WrapperComponent = ({ index, categories, title, ...restProps }) => {
  if (index === 0) {
    return (
      <>
        <CatalogList title={title} categories={categories} />
        <ProductSlider title="Популярные товары" />
      </>
    );
  }
  if (index === 1) {
    return (
      <>
        <CatalogList title={title} categories={categories} />
        <ProductSlider title="Новое" />
      </>
    );
  }
  return (
    <CatalogList title={title} categories={categories} catalogs={catalogs} />
  );
};

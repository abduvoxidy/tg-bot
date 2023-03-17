import React from "react";
import cls from "./CatalogBrand.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";
import SidebarCatalog from "components/UI/SideBars/SidebarCatalog";
import CatalogBanner from "components/UI/Banners/CatalogBanner";
import CatalogList from "components/UI/CatalogList";
import { catalogs } from "./data";
import ProductSlider from "components/UI/Products/ProductSlider";
import { useCategoriesQuery } from "services/category.service";
import { getNestedCategories } from "utils/getNestedCategories";
import { useState } from "react";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";

export function CatalogBrand() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const getKey = useKeyTranslation();

  const { data, isLoading } = useCategoriesQuery({
    data: {},
    queryParams: {
      enabled: true,
      onSuccess: (res) => {
        const response = getNestedCategories(
          {
            guid: null,
          },
          res.data.response
        );
        setCategories(response.children);
      },
    },
  });

  const subCategories =
    categories && categories.find((el) => el.guid === router.query.id);

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <h1 className={cls.title}>
          {subCategories ? subCategories?.[getKey("name")] : ""}
        </h1>
        <div className={cls.row}>
          <SidebarCatalog subCategories={subCategories?.children} />
          <div className={cls.body}>
            <CatalogBanner />
            <CatalogList catalogs={catalogs} />
            <ProductSlider title="Популярные товары" />
            <CatalogList catalogs={catalogs} />
            <ProductSlider title="Новое" />
            <CatalogList catalogs={catalogs} />
            <ProductSlider title="Электроника" />
          </div>
        </div>
      </Container>
    </main>
  );
}

import React from "react";
import cls from "./styles.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";
import SidebarCatalog from "components/UI/SidebarCatalog";
import CatalogBanner from "components/UI/CatalogBanner";
import CatalogList from "components/UI/CatalogList";
import { catalogs } from "./data";
import ProductSlider from "components/UI/Products/ProductSlider";

function CatalogBrand() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <h1 className={cls.title}>Смартфоны и аксессуары</h1>
        <div className={cls.row}>
          <SidebarCatalog />
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

export default CatalogBrand;

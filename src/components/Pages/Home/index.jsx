import React from "react";
import Banner from "components/UI/Banners/Banner";
import cls from "./styles.module.scss";
import BannerImg from "components/UI/Banners/BannerImg";
import ProductImages from "components/UI/Products/ProductImages";
import { installments, cars, appliances } from "./data";
import NewsList from "components/UI/NewsList";
import PopularBrands from "components/UI/PopularBrands";
import ProductList from "components/UI/Products/ProductList";
import { Container } from "@mui/material";

function Home() {
  return (
    <main className={cls.main}>
      <Container>
        <Banner />
        <ProductImages
          products={installments}
          productKey="installment"
          title="Смартфоны в рассрочку"
        />

        <BannerImg />

        <ProductImages
          products={cars}
          productKey="cars"
          title="Электромобилы"
        />
        <ProductList />
        <BannerImg className={cls.banner} />
        <ProductImages
          products={appliances}
          productKey="appliances"
          title="Бытовая техника в рассрочку"
        />
        <NewsList />
        <PopularBrands />
        <ProductList />
      </Container>
    </main>
  );
}

export default Home;

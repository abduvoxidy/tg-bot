import React from "react";
import Banner from "components/UI/Banner";
import cls from "./styles.module.scss";
import BannerImg from "components/UI/BannerImg";
import ProductImages from "components/UI/Products/ProductImages";
import { installments, cars, appliances } from "./data";
import News from "components/UI/News";
import Brands from "components/UI/Brands";
import ProductList from "components/UI/Products/ProductList";

function Home() {
  return (
    <main className={cls.main}>
      <Banner />
      <ProductImages
        products={installments}
        productKey="installment"
        title="Смартфоны в рассрочку"
      />
      <BannerImg />
      <ProductImages products={cars} productKey="cars" title="Электромобилы" />
      <ProductList />
      <BannerImg />
      <ProductImages
        products={appliances}
        productKey="appliances"
        title="Бытовая техника в рассрочку"
      />
      <News />
      <Brands />
      <ProductList />
    </main>
  );
}

export default Home;

import React from "react";
import Banner from "components/UI/Banners/Banner";
import cls from "./styles.module.scss";
import BannerImg from "components/UI/Banners/BannerImg";
import ProductImages from "components/UI/Products/ProductImages";
import { installments, cars, appliances } from "./data";
import News from "components/UI/News";
import PopularBrands from "components/UI/PopularBrands";
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
      <BannerImg className={cls.banner} />
      <ProductImages
        products={appliances}
        productKey="appliances"
        title="Бытовая техника в рассрочку"
      />
      <News />
      <PopularBrands />
      <ProductList />
    </main>
  );
}

export default Home;

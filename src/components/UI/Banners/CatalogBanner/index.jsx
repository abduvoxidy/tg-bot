import React from "react";
import cls from "./CatalogBanner.module.scss";
import MainButton from "../../Buttons/MainButton";
import Image from "next/image";

function CatalogBanner() {
  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <h1>Смартфоны в рассрочку</h1>
        <p>Купить любимые смартфоны в рассрочку</p>
        <MainButton className={cls.btn}>Смотреть все</MainButton>
      </div>
      <div className={cls.right}>
        <div className={cls.first_img}>
          <Image src="/images/main/pencil-1.png" alt="banner" layout="fill" />
        </div>
        <div className={cls.second_img}>
          <Image src="/images/main/ipad.png" alt="banner" layout="fill" />
        </div>
        <div className={cls.third_img}>
          <Image src="/images/main/pencil-2.png" alt="banner" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default CatalogBanner;

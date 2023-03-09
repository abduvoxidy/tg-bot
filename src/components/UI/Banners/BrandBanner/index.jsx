import React from "react";
import Image from "next/image";
import cls from "./BrandBanner.module.scss";

function BrandBanner({ className }) {
  return (
    <div className={`${cls.brandBanner} ${className}`}>
      <div className={cls.box}>
        <div className={cls.left}>
          <h1 className={cls.title}>
            Смартфоны в <br /> рассрочку
          </h1>
          <p className={cls.text}>Купить любимые смартфоны в рассрочку</p>
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
    </div>
  );
}

export default BrandBanner;

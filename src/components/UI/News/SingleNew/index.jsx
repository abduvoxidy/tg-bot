import React from "react";
import cls from "./SingleNew.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "components/UI/Arrows";
import CardNews from "./CardNews";

const images = [1, 2, 3, 4, 5];

export function SingleNew() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title="Главная / Новости / 1 марта 2023 г." />
        <h1 className={cls.title}>
          iPhone 16 Pro следующего года все еще находится на пути к тому, чтобы
          иметь идентификатор лица под дисплеем.
        </h1>
        <div className={cls.bannerImg}>
          <Image
            src={`/images/news/card1.png`}
            objectFit="contain"
            layout="fill"
            alt="img"
          />
        </div>
        <p className={cls.description}>
          Цифровой инвертор Наслаждайтесь повышенной энергоэффективностью,
          пониженным уровнем шумаи продолжительностью работы. В технологии
          цифрового инвертора используют мощные магниты, увеличивающие мощность.
          Но такое устройство работает тише и потребляет меньше энергии, чем
          универсальный электродвигатель.
          <br />
          <br />
          Цифровой инвертор Наслаждайтесь повышенной энергоэффективностью,
          пониженным уровнем шумаи продолжительностью работы. В технологии
          цифрового инвертора используют мощные магниты, увеличивающие мощность.
          Но такое устройство работает тише и потребляет меньше энергии, чем
          универсальный электродвигатель.
          <br />
          <br />
          Цифровой инвертор Наслаждайтесь повышенной энергоэффективностью,
          пониженным уровнем шумаи продолжительностью работы. В технологии
          цифрового инвертора используют мощные магниты, увеличивающие мощность.
          Но такое устройство работает тише и потребляет меньше энергии, чем
          универсальный электродвигатель.
          <br />
          <br />
          Цифровой инвертор Наслаждайтесь повышенной энергоэффективностью,
          пониженным уровнем шумаи продолжительностью работы. В технологии
          цифрового инвертора используют мощные магниты, увеличивающие мощность.
          Но такое устройство работает тише и потребляет меньше энергии, чем
          универсальный электродвигатель.
          <br />
          <br />
          Цифровой инвертор Наслаждайтесь повышенной энергоэффективностью,
          пониженным уровнем шумаи продолжительностью работы. В технологии
          цифрового инвертора используют мощные магниты, увеличивающие мощность.
          Но такое устройство работает тише и потребляет меньше энергии, чем
          универсальный электродвигатель.
          <br />
          <br />
          Цифровой инвертор Наслаждайтесь повышенной энергоэффективностью,
          пониженным уровнем шумаи продолжительностью работы. В технологии
          цифрового инвертора используют мощные магниты, увеличивающие мощность.
          Но такое устройство работает тише и потребляет меньше энергии, чем
          универсальный электродвигатель. <br />
        </p>

        <h1 className={cls.title}>Последние новости</h1>
        <Slider
          {...{
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow styles={cls.next} />,
            prevArrow: <SamplePrevArrow styles={cls.prev} />,
          }}
        >
          {images.map((el, index) => (
            <div className={cls.slideItem} key={index}>
              <CardNews />
            </div>
          ))}
        </Slider>
      </Container>
    </main>
  );
}
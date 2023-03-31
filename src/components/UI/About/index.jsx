import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import cls from "./About.module.scss";
import Image from "next/image";
import { useNewsByIdQuery, useNewsQuery } from "services/news.service";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";
import LastNews from "components/UI/News/SingleNew/LastNews";
import { useState } from "react";

const items = [
  {
    name: "Термины и понятия",
  },
  {
    name: "Предмет договора",
  },
  {
    name: "Подключение PARAGRAF Premium",
  },
  {
    name: "Порядок оплаты, права и обязанности стороно",
  },
];

const windowScrollTo = (selector, yOffset = -105) => {
  if (typeof window !== "undefined") {
    const el = document.querySelector("#" + selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y });
  }
};

const About = () => {
  //   const getKey = useKeyTranslation();
  //   const router = useRouter();
  //   const news_id = router.query?.id;

  //   const { data: news } = useNewsQuery();

  //   const newsData = news?.data?.response;

  //   const { data, isLoading } = useNewsByIdQuery({
  //     id: news_id,
  //     params: {},
  //   });

  //   const newsItem = data?.data?.response;
  const [active, setActive] = useState(null);

  return (
    <main className={cls.main}>
      <Container className={cls.container}>
        <BreadCrumbs title='Главная / Новости / 1 марта 2023 г.' />{" "}
        <h1 className={cls.title}>О нас</h1>
        <div className={cls.body}>
          <div className={cls.leftSide}>
            <div className={cls.bannerImg}>
              <Image
                src={
                  "/images/main/discount-banner.png" || `/images/no-photo.png`
                }
                objectFit='cover'
                layout='fill'
                alt='img'
              />
            </div>
            <div>
              {items.length > 0
                ? items.map((el, index) => (
                    <div id={"offer" + index}>
                      <h2 className={cls.desc__title}>{el.name}</h2>
                      <p className={cls.description}>
                        Наслаждайтесь повышенной энергоэффективностью,
                        пониженным уровнем шума и продолжительностью работы. В
                        технологии цифрового инвертора используют мощные
                        магниты, увеличивающие мощность. Но такое устройство
                        работает тише и потребляет меньше энергии, чем
                        универсальный электродвигатель.
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className={cls.rightSide}>
            <h2 className={cls.top__title}>Содержание:</h2>
            <ul className={cls.themes}>
              {items.map((item, index) => (
                <p
                  key={index}
                  className={cls.option}
                  onClick={() => {
                    windowScrollTo("offer" + index);
                  }}
                >
                  <li
                    onClick={() => setActive(item)}
                    className={active == item ? cls.active__class : cls.theme}
                  >
                    {item.name}
                  </li>
                </p>
              ))}
            </ul>
            <p></p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;

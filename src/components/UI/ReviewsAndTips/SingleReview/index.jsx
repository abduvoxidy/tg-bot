import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import cls from "./SingleReview.module.scss";
import Image from "next/image";
import { useNewsByIdQuery, useNewsQuery } from "services/news.service";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";
import LastNews from "components/UI/News/SingleNew/LastNews";

const SingleReview = () => {
  const getKey = useKeyTranslation();
  const router = useRouter();
  const news_id = router.query?.id;

  const { data: news } = useNewsQuery();

  const newsData = news?.data?.response;

  const { data, isLoading } = useNewsByIdQuery({
    id: news_id,
    params: {},
  });

  const newsItem = data?.data?.response;
  return (
    <main className={cls.main}>
      <Container className={cls.container}>
        <div className={cls.leftSide}>
          <BreadCrumbs title='Главная / Новости / 1 марта 2023 г.' />{" "}
          <h1 className={cls.title}>
            iPhone 16 Pro следующего года все еще находится на пути к тому,
            чтобы иметь идентификатор лица под дисплеем.
          </h1>
          <div className={cls.body}>
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
            <h3 className={cls.desc__title}>Цифровой инвертор</h3>
            <p className={cls.description}>
              Наслаждайтесь повышенной энергоэффективностью, пониженным уровнем
              шума и продолжительностью работы. В технологии цифрового инвертора
              используют мощные магниты, увеличивающие мощность. Но такое
              устройство работает тише и потребляет меньше энергии, чем
              универсальный электродвигатель.
            </p>
          </div>
        </div>
        <div className={cls.rightSide}>
          <LastNews news={newsData} />
        </div>
      </Container>
    </main>
  );
};

export default SingleReview;

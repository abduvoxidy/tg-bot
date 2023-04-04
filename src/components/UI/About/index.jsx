import { useState } from "react";
import cls from "./About.module.scss";
import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { BannerSkeleton } from "components/UI/Loaders/BannerSkeleton";
import { TextSkeleton } from "components/UI/Loaders/TextSkeleton";
import Image from "next/image";
import useKeyTranslation from "hooks/useKeyTranslation";
import { windowScrollTo } from "utils/windowScrollTo";
import { useInfoQuery, useStateTitlesQuery } from "services/info.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/reviews",
    label: "О нас",
  },
];

const About = () => {
  const getKey = useKeyTranslation();
  const [active, setActive] = useState(null);

  const { data, isLoading } = useInfoQuery({ data: { about_us: true } });
  const aboutData = data && data[0];

  const { data: titles } = useStateTitlesQuery({
    id: aboutData && aboutData.guid,
    data: { info_id: [aboutData && aboutData.guid] },
    queryParams: { enabled: !!(aboutData && aboutData.guid) },
  });

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs items={breadcrumbItems} />
        <h1 className={cls.title}>О нас</h1>
        {isLoading ? (
          <div className={cls.skeleton}>
            <BannerSkeleton />
            <TextSkeleton count={2} />
          </div>
        ) : (
          <div className={cls.body}>
            <div className={cls.leftSide}>
              <div className={cls.bannerImg}>
                <Image
                  src={(aboutData && aboutData.photo) || `/images/no-photo.png`}
                  objectFit='cover'
                  layout='fill'
                  alt='img'
                />
              </div>
              <div className={cls.content}>
                {titles
                  ? titles.map((el, index) => (
                      <div id={"offer" + index}>
                        <h2 className={cls.desc__title}>
                          {el?.[getKey("name")]}
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: el?.[getKey("description")],
                          }}
                          className={cls.description}
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className={cls.rightSide}>
              <h2 className={cls.top__title}>Содержание:</h2>
              <ul className={cls.themes}>
                {titles &&
                  titles.map((el, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        windowScrollTo("offer" + index, -140);
                        setActive(el);
                      }}
                      className={`${cls.theme} ${
                        active == el && cls.activeTheme
                      }`}
                    >
                      {el?.[getKey("name")]}
                    </li>
                  ))}
              </ul>
              <p></p>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default About;

import { useState } from "react";
import cls from "./Politica.module.scss";
import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { BannerSkeleton } from "components/UI/Loaders/BannerSkeleton";
import { TextSkeleton } from "components/UI/Loaders/TextSkeleton";
import useKeyTranslation from "hooks/useKeyTranslation";
import { windowScrollTo } from "utils/windowScrollTo";
import { useInfoQuery, useStateTitlesQuery } from "services/info.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/",
    label: "Политика возврата товара",
  },
];

const Politica = () => {
  const getKey = useKeyTranslation();
  const [active, setActive] = useState(null);

  const { data, isLoading } = useInfoQuery({ data: { politica: true } });
  const politica = data && data[0];

  const { data: titles } = useStateTitlesQuery({
    id: politica && politica.guid,
    data: { info_id: [politica && politica.guid] },
    queryParams: { enabled: !!(politica && politica.guid) },
  });

  return (
    <div>
      <main className={cls.main}>
        <Container>
          <BreadCrumbs items={breadcrumbItems} />
          <h1 className={cls.title}>Политика возврата товара</h1>
          {isLoading ? (
            <div className={cls.skeleton}>
              <BannerSkeleton />
              <TextSkeleton count={2} />
            </div>
          ) : (
            <div className={cls.body}>
              <div className={cls.leftSide}>
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
    </div>
  );
};

export default Politica;

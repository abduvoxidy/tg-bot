import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import cls from "./Reviews.module.scss";
import BreadCrumbs from "../BreadCrumbs";
import Image from "next/image";
import ReviewsCard from "./ReviewsCard";
import { StyledTabs, StyledTab } from "../CTabs";
import TabBody from "../CTabs/TabBody";
import { useReviewsQuery } from "services/reviews.service";
import { useStateTitleQuery } from "services/reviews.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/reviews",
    label: "Обзоры и советы",
  },
];

function ReviewsAndTips() {
  const [tabValue, setTabValue] = useState("");

  const { data: categoryTitle } = useStateTitleQuery({
    data: {},
    queryParams: {
      onSuccess: (res) => console.log("category__title", res),
    },
  });

  const { data: articles, isLoading } = useReviewsQuery({ 
    data: {
      category_state_id: tabValue || undefined,
    },
    id: tabValue,
    queryParams: {
      onSuccess: (res) => console.log("reskdnw", res),
    },
  });

  if (isLoading) return "Loading...";

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs items={breadcrumbItems} />
        <h1 className={cls.title}>Обзоры и советы</h1>
        <div className={cls.bannerImg}>
          <Image
            src={articles[0].photo} //'/images/main/discount-banner.png'
            objectFit='cover'
            layout='fill'
            loading='lazy'
          />

          <p className={cls.top__text}>
            Отдел радиологии работает круглосуточно
          </p>
          <p className={cls.bottom__text}>
            Отделение радиологии (МРТ, МСКТ) клиники Medion работает радиологии
            (МРТ, МСКТ)...
          </p>
        </div>

        <div className={cls.root}>
          <div className={cls.header}>
            <StyledTabs
              onChange={(e, val) => {
                setTabValue(val);
              }}
              value={tabValue}
            >
              <StyledTab value='' label='Всё' />
              {categoryTitle &&
                categoryTitle?.map((el) => (
                  <StyledTab key={el.id} value={el.guid} label={el.name_uz} />
                ))}
            </StyledTabs>
          </div>
          <div className={cls.main}>
            <TabBody tab='' tabValue={tabValue}>
              <div className={cls.cards}>
                {articles &&
                  articles?.map((el) => <ReviewsCard key={el.id} data={el} />)}
              </div>
            </TabBody>
            {categoryTitle &&
              categoryTitle.map((el) => (
                <TabBody tab={el.guid} tabValue={tabValue}>
                  <div className={cls.cards}>
                    {articles &&
                      articles?.map((el) => (
                        <ReviewsCard key={el.id} data={el} />
                      ))}
                  </div>
                </TabBody>
              ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ReviewsAndTips;

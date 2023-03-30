import { Container } from "@mui/material";
import { useState } from "react";
import cls from "./Reviews.module.scss";
import BreadCrumbs from "../BreadCrumbs/Index2";
import Image from "next/image";
import ReviewsCard from "./ReviewsCard";
import { StyledTabs, StyledTab } from "../CTabs";

import data from "./data";
import TabBody from "../CTabs/TabBody";

function ReviewsAndTips() {
  const [tabValue, setTabValue] = useState("all");

  // const { data, isLoading } = discountProductsQuery({
  //   data: {},
  //   queryParams: {
  //     // onSuccess: (res) => console.log("res", res),
  //   },
  // });

  // if (isLoading) return "Loading...";

  // const response = data && data?.response;

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title="Главная / Новости" />
        <h1 className={cls.title}>Обзоры и советы</h1>
        <div className={cls.bannerImg}>
          <Image
            src="/images/main/discount-banner.png"
            objectFit="cover"
            layout="fill"
            loading="lazy"
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
              <StyledTab value="all" label="Всё" />
              <StyledTab value="review" label="Обзоры" />
              <StyledTab value="rayting" label="Рейтинг" />
              <StyledTab value="technology" label="Технологии" />
            </StyledTabs>
          </div>
          <div className={cls.main}>
            <TabBody tab="all" tabValue={tabValue}>
              <div className={cls.cards}>
                {data &&
                  data.map((el) => <ReviewsCard key={el.id} data={el} />)}
              </div>
            </TabBody>
            <TabBody tab="review" tabValue={tabValue}>
              hello
            </TabBody>
            <TabBody tab="rayting" tabValue={tabValue}>
              wuaaaa
            </TabBody>
            <TabBody tab="technology" tabValue={tabValue}>
              haaaaaa
            </TabBody>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ReviewsAndTips;

import { Container } from "@mui/material";
import TabPanel from "@mui/material";
import React from "react";
// import { getElements } from "services/example.service";
import cls from "./Discount.module.scss";
import BreadCrumbs from "../BreadCrumbs";
import Image from "next/image";
import { DiscountTimeIcon } from "../Icons";
import DiscountCard from "./DiscountCard";
import { discountProductsQuery } from "services/discount.service";

function Discount() {
  const { data, isLoading } = discountProductsQuery({
    data: {},
    queryParams: {
      // onSuccess: (res) => console.log("res", res),
    },
  });

  if (isLoading) return "Loading...";

  const response = data && data?.response;

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title='Главная / Акции' />
        <h1 className={cls.title}>Акции</h1>
        <div className={cls.bannerImg}>
          <Image
            src='/images/main/discount-banner.png'
            objectFit='cover'
            layout='fill'
            loading='lazy'
          />

          <div className={cls.discount}>15%</div>
          <p className={cls.top__text}>MacBook Pro</p>
          <div className={cls.date}>
            <p>Акция действует:</p> 08.03.2023 - 15.03.2023
          </div>

          <div className={cls.right}>
            <span>
              <DiscountTimeIcon />
            </span>
            11:36:08
          </div>
        </div>

        <div className={cls.cards}>
          {response &&
            response.map((el) => (
              <DiscountCard
                key={el.id}
                icon={el.icon}
                time={el.time}
                discount={el.value}
                image={el.photo}
                name={el.name_uz}
                periodFrom={el.end_date}
                periodTil={el.start_date}
              />
            ))}
        </div>
      </Container>
    </main>
  );
}

export default Discount;

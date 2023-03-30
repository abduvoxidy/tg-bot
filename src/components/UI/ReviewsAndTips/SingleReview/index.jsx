import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import Image from "next/image";
import React from "react";
import cls from "./SingleReview.module.scss";

const SingleReview = () => {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title='Главная / Новости / 1 марта 2023 г.' />
        <div className={cls.box}>
          <div className='left'>
            <h1>
              iPhone 16 Pro следующего года все еще находится на пути к тому,
              чтобы иметь идентификатор лица под дисплеем.
            </h1>
            <Image src='/images/main/banner.p' layout='fill' objectFit='cover' />
            <p className={cls.top__title}>Цифровой инвертор</p>
            <div>
                
            </div>

          </div>
          <div className='right'></div>
        </div>
      </Container>
    </main>
  );
};

export default SingleReview;

import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import React from "react";
import cls from './InnerBrand.module.scss'

const InnerBrand = () => {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title='Главная / Акции' />
      </Container>
    </main>
  );
};

export default InnerBrand;

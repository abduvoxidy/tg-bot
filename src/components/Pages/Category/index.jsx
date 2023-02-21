import { Container } from "@mui/material";
import React from "react";
import cls from "./styles.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import SidebarCategory from "components/UI/SidebarCategory";
import PopularOffers from "components/UI/PopularOffers";

function Category() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <div className={cls.row}>
          <SidebarCategory />
          <div>
            <PopularOffers />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Category;

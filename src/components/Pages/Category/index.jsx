import { Container } from "@mui/material";
import React from "react";
import cls from "./Category.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import SidebarCategory from "components/UI/SideBars/SidebarCategory";
import PopularOffers from "components/UI/PopularOffers";
import TextContent from "components/UI/TextContent";

export function Category() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <h1 className={cls.title}>Смартфоны</h1>
        <div className={cls.row}>
          <SidebarCategory />
          <div>
            <PopularOffers />
            <TextContent />
          </div>
        </div>
      </Container>
    </main>
  );
}

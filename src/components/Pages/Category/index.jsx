import { Container } from "@mui/material";
import React from "react";
import cls from "./Category.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import SidebarCategory from "components/UI/SideBars/SidebarCategory";
import PopularOffers from "components/UI/PopularOffers";
import TextContent from "components/UI/TextContent";
// import { useCategoriesQuery } from "services/category.service";
import { useRouter } from "next/router";
import { useCategoryByIdQuery } from "services/category.service";
import useKeyTranslation from "hooks/useKeyTranslation";

export function Category() {
  const router = useRouter();
  const category_id = router.query?.id;

  const getKey = useKeyTranslation();
  const { data: categoryData, isLoading } = useCategoryByIdQuery({
    id: category_id,
    params: {},
    queryParams: {
      enabled: true,
      select: (res) => res?.data?.data?.response,
    },
  });

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <h1 className={cls.title}>
          {categoryData && categoryData?.[getKey("name")]}
        </h1>
        <div className={cls.row}>
          <SidebarCategory />
          <div>
            <PopularOffers />

            <TextContent
              title={categoryData?.[getKey("title")]}
              description={categoryData?.[getKey("description")]}
              isContent
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

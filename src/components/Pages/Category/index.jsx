import { Container } from "@mui/material";
import React from "react";
import cls from "./Category.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs/Index2";
import SidebarCategory from "components/UI/SideBars/SidebarCategory";
import PopularOffers from "components/UI/PopularOffers";
import TextContent from "components/UI/TextContent";
// import { useCategoriesQuery } from "services/category.service";
import { useRouter } from "next/router";
import { useCategoryByIdQuery } from "services/category.service";
import {
  useSubCategoriesQuery,
  useSubCategoryVariantsQuery,
} from "services/subcategory.service";
import useKeyTranslation from "hooks/useKeyTranslation";
import SidebarCatalog from "components/UI/SideBars/SidebarCatalog";

export function Category() {
  const router = useRouter();
  const category_id = router.query?.id;

  const getKey = useKeyTranslation();
  const { data: categoryData } = useCategoryByIdQuery({
    id: category_id,
    params: {},
    queryParams: {},
  });
  const { data: subCategoryData, isLoading } = useSubCategoriesQuery({
    queryParams: {},
    data: {
      category_slug: router?.query?.slug,
      limit: 10,
      page: 1,
    },
  });
  console.log("subb", subCategoryData);
  const { data: subCategoryVariantData, isLoading: categoryVariantLoader } =
    useSubCategoryVariantsQuery({
      data: {
        category_slug: router?.query?.id,
        limit: 10,
        page: 1,
      },
      queryParams: {
        // select: (res) => res.data?.data?.product_variants,
        onSuccess: (res) => {
          console.log("response", res);
        },
      },
    });
  // console.log("variant", subCategoryVariantData);
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <h1 className={cls.title}>
          {categoryData && categoryData?.[getKey("name")]}
        </h1>
        <div className={cls.row}>
          <div>
            <SidebarCategory subData={subCategoryData} />
          </div>
          <div>
            <PopularOffers
              products={
                router?.query?.id
                  ? subCategoryVariantData?.product_variants
                  : subCategoryData?.products
              }
              isLoading={isLoading}
            />

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

import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const subCategoryService = {
  getSubCategories: (data) =>
    request.post("/v1/invoke_function/paragraf-get-product-by-category", {
      data,
    }),
};
const subCategoryVariantService = {
  getSubCategoryVariants: (data) =>
    request.post(
      "/v1/invoke_function/paragraf-get-variant-product-by-category",
      { data }
    ),
};
export const useSubCategoriesQuery = ({ data, queryParams } = {}) => {
  return useQuery(
    ["GET_SUBCATEGORIES", data],
    async () => {
      return await subCategoryService
        .getSubCategories(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

export const useSubCategoryVariantsQuery = ({ data, queryParams } = {}) => {
  return useQuery(
    ["GET_SUBCATEGORY_VARIANTS", data],
    async () => {
      return await subCategoryVariantService
        .getSubCategoryVariants(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

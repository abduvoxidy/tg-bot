import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const BrandProductService = {
  getBrandProducts: (data) =>
    request.post("/v1/invoke_function/paragraf-get-product-by-brand", {
      data,
    }),
};
export const useBrandProductsQuery = ({ data, queryParams } = {}) => {
  return useQuery(
    ["GET_BRAND_PRODUCT", data],
    async () => {
      return await BrandProductService.getBrandProducts(data).then((res) =>
        getResponse(res)
      );
    },
    queryParams
  );
};

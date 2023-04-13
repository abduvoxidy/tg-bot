import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

export const productVariantsService = {
  getList: (data) =>
    request.post("/v1/object/get-list/product_variants", { data }),
};

export const useProductVariantsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_LIST_PRODUCT_VARIANTS", data],
    async () => {
      return await productVariantsService
        .getList(data)
        .then((res) => getResponse(res, true));
    },
    queryParams
  );
};

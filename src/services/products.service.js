import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const productsService = {
  getList: (data) => request.post("/v1/object/get-list/products", { data }),
};

export const useProductsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_LIST_PRODUCTS", data],
    async () => {
      return await productsService
        .getList(data)
        .then((res) => getResponse(res, true));
    },
    queryParams
  );
};

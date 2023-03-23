import { useQuery } from "react-query";
import { request } from "./http-client";

const productsService = {
  getList: (data) => request.post("/v1/object/get-list/products", { data }),
};

export const useProductsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_LIST_PRODUCTS", data],
    () => {
      return productsService.getList(data);
    },
    queryParams
  );
};

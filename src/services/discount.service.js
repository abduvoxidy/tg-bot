import { useQuery, useMutation } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const discountProductService = {
  getList: (data) =>
    request.post("/v1/object/get-list/product_discount", { data }),
};

export const discountProductsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_DISCOUNT_PRODUCTS", data],
    async () => {
      return await discountProductService
        .getList(data)
        .then((res) => getResponse(res, true));
    },
    queryParams
  );
};

export const discountProductsCreateMutation = (mutationSettings) => {
  return useMutation(
    (data) => discountProductService.create(data),
    mutationSettings
  );
};

export const discountProductsUpdateMutation = (mutationSettings) => {
  return useMutation(
    (data) => discountProductService.update(data),
    mutationSettings
  );
};

import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const featureListProductsService = {
  getList: (data) =>
    request.post("/v1/object/get-list/feature_list_products", { data }),
};

export const useFeatureListProductsQuery = ({
  data = {},
  queryParams,
} = {}) => {
  return useQuery(
    ["GET_FEATURE_LIST_PRODUCTS", data],
    async () => {
      return await featureListProductsService
        .getList(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

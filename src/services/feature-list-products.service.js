import { useQuery } from "react-query";
import { request } from "./http-client";

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
    () => {
      return featureListProductsService.getList(data);
    },
    queryParams
  );
};

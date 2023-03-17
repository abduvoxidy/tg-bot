import { useQuery } from "react-query";
import { request } from "./http-client";

const featureListCategoriesService = {
  getList: (data) =>
    request.post("/v1/object/get-list/feature_list_catagories", { data }),
};

export const useFeatureListCategoriesQuery = ({
  data = {},
  queryParams,
} = {}) => {
  return useQuery(
    ["GET_FEATURE_LIST_CATEGORIES", data],
    () => {
      return featureListCategoriesService.getList(data);
    },
    queryParams
  );
};

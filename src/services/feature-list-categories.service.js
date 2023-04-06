import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

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
    async () => {
      return await featureListCategoriesService
        .getList(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

import { useQuery } from "react-query";
import { httpRequestFunction } from "./http-client-function";

const categoriesService = {
  getList: (data) =>
    httpRequestFunction.post("/function/paragraf-get-category", {
      category_id: "c95122ba-b3bf-47e3-b50d-0ce0072c8bf3",
      app_id: "P-lc7prRbwHd8kZk57CwFvpx6N95at1xbV",
    }),
};

export const useFuncCategoriesQuery = ({
  data = {},
  queryParams,
  routerId,
} = {}) => {
  return useQuery(
    ["GET_FUNC_CATEGORIES", data, routerId],
    async () => {
      return await categoriesService.getList(data);
    },
    queryParams
  );
};

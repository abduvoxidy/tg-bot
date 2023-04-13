import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const categoryFuncService = {
  getList: (data) =>
    request.post("/v1/invoke_function/paragraf-get-category", { data }),
};

export const useFuncCategoriesQuery = ({
  data = {},
  queryParams,
  routerId,
} = {}) => {
  return useQuery(
    ["GET_FUNC_CATEGORIES", data, routerId],
    async () => {
      return await categoryFuncService
        .getList(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

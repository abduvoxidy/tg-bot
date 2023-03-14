import { useMutation, useQuery } from "react-query";
import { request } from "./http-client";

const categoryService = {
  getList: (data) => request.post("/v1/object/get-list/category", data),
};

export const useCategoriesQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_CATEGORIES", data],
    () => {
      return categoryService.getList(data);
    },
    queryParams
  );
};

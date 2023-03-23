import { useQuery } from "react-query";
import { request } from "./http-client";

const categoryService = {
  getList: (data) => request.post("/v1/object/get-list/category", { data }),
  getBanners: (data) =>
    request.post("/v1/object/get-list/category_banners", { data }),
  getById: (id, params) =>
    request.get(`/v1/object/category/${id}`, {
      params,
    }),
};

export const useCategoriesQuery = ({
  data = {},
  queryParams,
  routerId,
} = {}) => {
  return useQuery(
    ["GET_CATEGORIES", data, routerId],
    () => {
      return categoryService.getList(data);
    },
    queryParams
  );
};

export const useCategoryByIdQuery = ({ id, params = {}, quryParams }) => {
  return useQuery(
    ["GET_CATEGORY_BY_ID", { id, ...params }],
    () => {
      return categoryService.getById(id, params);
    },
    quryParams
  );
};

export const useCategoryBannersQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_CATEGORY_BANNERS", data],
    () => {
      return categoryService.getBanners(data);
    },
    queryParams
  );
};

import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

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
    async () => {
      return await categoryService
        .getList(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

export const useCategoryByIdQuery = ({ id, params = {}, quryParams }) => {
  return useQuery(
    ["GET_CATEGORY_BY_ID", { id, ...params }],
    async () => {
      return await categoryService
        .getById(id, params)
        .then((res) => getResponse(res));
    },
    quryParams
  );
};

export const useCategoryBannersQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_CATEGORY_BANNERS", data],
    async () => {
      return await categoryService
        .getBanners(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

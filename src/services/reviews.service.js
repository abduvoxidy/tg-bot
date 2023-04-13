import { useQuery } from "react-query";
import { getResponse } from "utils/getResponse";
import { request } from "./http-client";

const reviewsService = {
  getList: (data) => request.post("/v1/object/get-list/articles", { data }),
  getById: (id, params) =>
    request.get(`/v1/object/articles/${id}`, {
      params,
    }),
  getByCategory: (data) =>
    request.post(`/v1/object/get-list/category_state`, {
      data,
    }),
};

export const useReviewsQuery = ({ data = {}, id, queryParams } = {}) => {
  return useQuery(
    ["GET_REVIEWS", data, id],

    async () => {
      return await reviewsService.getList(data).then((res) => getResponse(res));
    },

    queryParams
  );
};

export const useStateTitleQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_CATEGORY_TITLE", data],
    async () => {
      return await reviewsService
        .getByCategory(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

export const useReviewByIdQuery = ({ params = {}, id, queryParams } = {}) => {
  return useQuery(
    ["GET_REVIEWS_BY_ID", { id, ...params }],
    async () => {
      return await reviewsService
        .getById(id, params)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

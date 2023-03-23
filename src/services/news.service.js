import { useQuery } from "react-query";
import { request } from "./http-client";

const newsService = {
  getList: (data) => request.post("/v1/object/get-list/news", { data }),
  getById: (id, params) =>
    request.get(`/v1/object/news/${id}`, {
      params,
    }),
};

export const useNewsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_NEWS", data],
    () => {
      return newsService.getList(data);
    },
    queryParams
  );
};

export const useNewsByIdQuery = ({ id, params = {}, quryParams }) => {
  return useQuery(
    ["GET_NEWS_BY_ID", { id, ...params }],
    () => {
      return newsService.getById(id, params);
    },
    quryParams
  );
};

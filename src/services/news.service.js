import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

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
    async () => {
      return await newsService.getList(data).then((res) => getResponse(res));
    },
    queryParams
  );
};

export const useNewsByIdQuery = ({ id, params = {}, quryParams }) => {
  return useQuery(
    ["GET_NEWS_BY_ID", { id, ...params }],
    async () => {
      return await newsService
        .getById(id, params)
        .then((res) => getResponse(res));
    },
    quryParams
  );
};

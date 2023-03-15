import { useQuery } from "react-query";
import { request } from "./http-client";

const newsService = {
  getList: (data) => request.post("/v1/object/get-list/news", data),
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

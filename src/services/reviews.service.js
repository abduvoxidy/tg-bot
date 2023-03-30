import { useQuery } from "react-query";
import { request } from "./http-client";

const reviewsService = {
  getList: (data) => request.post("/v1/object/get-list/articles", { data }),
  getById: (id, params) =>
    request.get(`/v1/object/articles/${id}`, {
      params,
    }),
};

export const useReviewsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_REVIEWS", data],
    () => {
      return reviewsService.getList(data);
    },
    queryParams
  );
};

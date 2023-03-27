import { useQuery, useMutation } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const newsCommentsService = {
  getList: (data) => request.post("/v1/object/get-list/comments", { data }),
  create: (data) => request.post("/v1/object/comments", { data }),
  update: (data) => request.put("/v1/object/comments", { data }),
};

export const useNewsCommentsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_NEWS_COMMENTS", data],
    async () => {
      return await newsCommentsService
        .getList(data)
        .then((res) => getResponse(res, true));
    },
    queryParams
  );
};

export const useNewsCommentsCreateMutation = (mutationSettings) => {
  return useMutation(
    (data) => newsCommentsService.create(data),
    mutationSettings
  );
};

export const useNewsCommentsUpdateMutation = (mutationSettings) => {
  return useMutation(
    (data) => newsCommentsService.update(data),
    mutationSettings
  );
};

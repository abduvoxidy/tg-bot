import { useQuery } from "react-query";
import { getResponse } from "utils/getResponse";
import { request } from "./http-client";

const infoService = {
  getList: (data) => request.post("/v1/object/get-list/info", { data }),
  getStateList: (data) =>
    request.post("/v1/object/get-list/state_title", { data }),
};

export const useInfoQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_INFOS", data],

    async () => {
      return await infoService.getList(data).then((res) => getResponse(res));
    },

    queryParams
  );
};

export const useStateTitlesQuery = ({ data = {}, id, queryParams } = {}) => {
  return useQuery(
    ["GET_STATE_TITLES", data, id],

    async () => {
      return await infoService
        .getStateList(data)
        .then((res) => getResponse(res));
    },

    queryParams
  );
};

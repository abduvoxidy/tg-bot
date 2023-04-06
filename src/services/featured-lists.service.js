import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const featuredListsService = {
  getList: (data) =>
    request.post("/v1/object/get-list/featured_lists", { data }),
};

export const useFeaturedListsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_FEATURED_LISTS", data],
    async () => {
      return await featuredListsService
        .getList(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

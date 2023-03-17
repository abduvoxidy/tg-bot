import { useQuery } from "react-query";
import { request } from "./http-client";

const featuredListsService = {
  getList: (data) =>
    request.post("/v1/object/get-list/featured_lists", { data }),
};

export const useFeaturedListsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_FEATURED_LISTS", data],
    () => {
      return featuredListsService.getList(data);
    },
    queryParams
  );
};

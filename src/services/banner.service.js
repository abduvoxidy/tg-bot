import { useQuery } from "react-query";
import { request } from "./http-client";

const bannerService = {
  getList: (data) => request.post("/v1/object/get-list/banners", { data }),
};

export const useBannersQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_BANNERS", data],
    () => {
      return bannerService.getList(data);
    },
    queryParams
  );
};

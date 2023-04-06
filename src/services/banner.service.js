import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const bannerService = {
  getList: (data) => request.post("/v1/object/get-list/banners", { data }),
};

export const useBannersQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_BANNERS", data],
    async () => {
      return await bannerService.getList(data).then((res) => getResponse(res));
    },
    queryParams
  );
};

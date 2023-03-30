import { useQuery, useMutation } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

const brandsService = {
  getList: (data) => request.post("/v1/object/get-list/brands", { data }),
  create: (data) => request.post("/v1/object/brands", { data }),
  update: (data) => request.put("/v1/object/brands", { data }),
};

export const useBrandsQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_BRANDS", data],
    async () => {
      return await brandsService.getList(data).then((res) => getResponse(res));
    },
    queryParams
  );
};
 
import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

export const branchService = {
  getList: (data) => request.post("/v1/object/get-list/branch", { data }),
};

export const useBranchesQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_BRANCHES", data],
    async () => {
      return await branchService.getList(data).then((res) => getResponse(res));
    },
    queryParams
  );
};

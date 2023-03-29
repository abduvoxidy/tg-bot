import { useQuery } from "react-query";
import { request } from "./http-client";
import { getResponse } from "utils/getResponse";

export const attributesService = {
  getList: (data) => request.post("/v1/object/get-list/attributes", { data }),
  getVariantsList: (data) =>
    request.post("/v1/object/get-list/attribute_variants", { data }),
};

export const useAttributesQuery = ({ data = {}, queryParams } = {}) => {
  return useQuery(
    ["GET_ATTRIBUTES", data],
    async () => {
      return await attributesService
        .getList(data)
        .then((res) => getResponse(res));
    },
    queryParams
  );
};

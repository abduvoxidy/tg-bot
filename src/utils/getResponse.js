export function getResponse(data, isCount) {
  if (Object.keys(data).includes("response")) {
    console.log("DATA", data);
    if (isCount) return data;
    else return data.response;
  } else {
    return getResponse(data?.data, isCount);
  }
}

export const sortFunctionArr = (arr = [], key = "order_number") => {
  const sortedArr =
    arr && arr.length > 0
      ? [...arr].sort((a, b) => {
          return a[key] - b[key];
        })
      : [];
  return sortedArr;
};

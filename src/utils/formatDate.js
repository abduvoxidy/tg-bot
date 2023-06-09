import format from "date-fns/format";

export const formatDate = (day) => format(new Date(day), "dd.MM.yyyy");

export const formatDateTime = (day) =>
  format(new Date(day), "dd.MM.yyyy HH:mm");

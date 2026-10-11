// 07-npm — Exercise

import dayjs from "dayjs";

// 1. Format a date as DD/MM/YYYY
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

// 2. Get the year from a date
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

// 3. Add days to a date
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

// 4. Package chosen from the npm registry
export const myPackage = "lodash";
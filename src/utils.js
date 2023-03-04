import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import js_ago from "js-ago";
import dateFormat, { masks } from "dateformat";

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  return dateFormat(date, "isoDateTime");
  // return (
  //   [padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate()), date.getFullYear()].join("/") +
  //   " " +
  //   [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds())].join(":")
  // );
}

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export const formatTimeAgo = (timestamp) => {
  return js_ago(+timestamp);
};

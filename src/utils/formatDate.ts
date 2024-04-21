// import dayjs from "dayjs";
// import updateLocale from "dayjs/plugin/updateLocale";

// export const formatDate = (date: string, format?: string): string => {
//   if (!date) return "";
//   return dayjs(date).format(format ? format : "DD-MM-YYYY");
// };

// export const prettyDate = (date: string): string => {
//   if (!date) return "";
//   dayjs.extend(updateLocale);
//   dayjs.updateLocale("en", {
//     months: [
//       "Januari",
//       "Februari",
//       "Maret",
//       "April",
//       "Mei",
//       "Juni",
//       "Juli",
//       "Agustus",
//       "September",
//       "Oktober",
//       "November",
//       "Desember",
//     ],
//   });
//   const parseDate = dayjs(date);

//   return parseDate.format("D MMMM YYYY");
// };

// export const formatPayloadDate = (date: string) => {
//   const splittedDate = date.split("/");
//   return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
// };

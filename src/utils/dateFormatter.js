
export const getDateFromUtc = (dateUtc) => {
  const fullDate = new Date(dateUtc);
  const dateToLocale = fullDate.toLocaleString();
  const date = dateToLocale.split(",")[0];
  const arr = date.split("/");

  const day = arr[1].padStart(2, 0);
  const month = arr[0].padStart(2, 0);
  const year = arr[2];

  return [day, month, year].join(".");
};

export const setDateForBackend = (str) => {
  const arr = str.split(".");

  return [arr[1], arr[0], arr[2]].join("-");
};

export const setDateForQuerySearch = (dateUnformatted) => {
  const day = dateUnformatted.$D
  const month = dateUnformatted.$M + 1;
  const year = dateUnformatted.$y;

  return [month, day, year].join("-");
};
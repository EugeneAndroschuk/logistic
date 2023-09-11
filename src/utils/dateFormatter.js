
export const getDateFromUtc = (dateUtc) => {
  const fullDate = new Date(dateUtc);
  const dateToLocale = fullDate.toLocaleString();

  const date = dateToLocale.split(",")[0];
  // const arr = date.split("/");

  // let day = " ";
  // let month = " ";

  // if (arr[1].length === 1) day = "0" + arr[1];
  // else day = arr[1];

  // if (arr[0].length === 1) month = "0" + arr[0];
  // else month = arr[0];
  // const day = arr[1];
  // const month = arr[0];
  // const year = arr[2];

  // return [day, month, year].join(".");

  return date;
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
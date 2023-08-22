
export const getDateFromUtc = (dateUtc) => {
  const fullDate = new Date(dateUtc);
  const dateToLocale = fullDate.toLocaleString();
  const date = dateToLocale.split(",")[0];
  const arr = date.split("/");

  const day = arr[1].padStart(2, 0);
  const month = arr[0].padStart(2, 0);
  const year = arr[2];



  return [day, month, year].join(".");
  // return date;
};

export const setDateForBackend = (str) => {
  const arr = str.split(".");

  // const date = new Date([arr[1], arr[0], arr[2]].join("-"));





  

  // const date = [arr[1], arr[0], arr[2]].join("-");
  return [arr[1], arr[0], arr[2]].join("-");

  // return date.concat("T23:59:59");

  
  // return date.setDate(date.getDate() + 1);
};

export const setDateForQuerySearch = (dateUnformatted) => {
  // const date = new Date(dateUnformatted);
  // const day = String(date.getUTCDate()).padStart(2, 0);
  // const month = String(date.getUTCMonth() + 1).padStart(2, 0);
  // const year = date.getUTCFullYear();

  const day = dateUnformatted.$D
  const month = dateUnformatted.$M + 1;
  const year = dateUnformatted.$y;

  return [month, day, year].join("-");
};



// const getFormattedDate = (dateUtc) => {
//     const date = new Date(dateUtc);
//     const day = String(date.getUTCDate()).padStart(2,0);
//     const month = String(date.getUTCMonth() + 1).padStart(2,0);
//     const year = date.getUTCFullYear();

//     return [day, month, year].join('.');
// }

// export default getFormattedDate; 
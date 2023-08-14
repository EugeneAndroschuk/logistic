
export const getDateFromUtc = (dateUtc) => {
  const date = new Date(dateUtc);
  const day = String(date.getUTCDate()).padStart(2, 0);
  const month = String(date.getUTCMonth() + 1).padStart(2, 0);
  const year = date.getUTCFullYear();

  return [day, month, year].join(".");
};

export const setDateForBackend = (str) => {
  const arr = str.split(".");

  return [arr[1], arr[0], arr[2]].join("-");
};

export const setDateForQuerySearch = (dateUnformatted) => {
  const date = new Date(dateUnformatted);
  const day = String(date.getUTCDate()).padStart(2, 0);
  const month = String(date.getUTCMonth() + 1).padStart(2, 0);
  const year = date.getUTCFullYear();

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
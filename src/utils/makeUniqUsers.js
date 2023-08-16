const makeUniqUsers = (arr) => {
  const seen = {};
  const result = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = `$${item._id}`;
    if (!seen[key]) {
      seen[key] = 1;
      result[j++] = item;
    }
  }

  return result;
};

export default makeUniqUsers;
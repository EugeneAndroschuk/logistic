const getDateFromString = (str) => {
    const arr = str.split('.');

    const date = new Date(arr[2], arr[1] - 1, arr[0]);
    
    return date;
}

export default getDateFromString;
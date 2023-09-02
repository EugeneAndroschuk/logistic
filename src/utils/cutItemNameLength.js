const cutItemNameLength = (str, amount) => {
    if (str && str.length > amount) return str.slice(0, amount) + "...";
    else return str;
}

export default cutItemNameLength;
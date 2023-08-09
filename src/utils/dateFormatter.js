import dateFormat from "dateformat";

const getFormattedDate = (date) => {
    const d = new Date(date);

    return dateFormat(d, "dd.mm.yyyy");
}

export default getFormattedDate; 
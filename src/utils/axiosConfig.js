import axios from "axios";

const baseURL = "https://logistics-db.onrender.com";

export const axiosPublic = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
});

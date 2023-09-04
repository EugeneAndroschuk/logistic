import axios from "axios";

// const baseURL = "http://localhost:3000";

const baseURL = "https://logistics-db.onrender.com";

export const axiosPublic = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
});

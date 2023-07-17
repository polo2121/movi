import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDBApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "bearer " + TMDB_TOKEN,
    accept: "application/json",
  },
});

TMDBApi.defaults.headers.post["content-type"] =
  "application/x-www-form-urlencoded";

export default TMDBApi;

export const fetchDataFromAPI = async (url, params) => {
  try {
    const data = await axios.get(BASE_URL + url, { headers, params });
  } catch (error) {
    console.log(error);
    return error;
  }
};

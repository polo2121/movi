import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "bearer " + TMDB_TOKEN,
    accept: "application/json",
  },
});

api.defaults.headers.post["content-type"] = "application/x-www-form-urlencoded";

const TMDBApi = {
  getMovieByList: async (list, controller) => {
    return api.request({
      url: `/movie/${list}?language=en-US&page=1`,
      method: "GET",
      responseType: "json",
      timeout: 20000,
      singal: controller.signal,
    });
  },
};



export default TMDBApi;

export const fetchDataFromAPI = async (url, params) => {
  try {
    const data = await axios.get(BASE_URL + url, { headers, params });
  } catch (error) {
    console.log(error);
    return error;
  }
};

// export const getMovieList = async (movieList, controller) => {
//   try {
//     const data = await TMDBApi.get(
//       `/movie/${movieList}?language=en-US&page=1`,
//       { signal: controller.signal }
//     );
//     const results = data.data.results;
//     console.log(results);
//     return data;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     controller.abort();
//   }
// };

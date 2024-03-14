import axios from "axios";

const apiKey = "cae1aa18fc25750298197ea33e13ba2d";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWUxYWExOGZjMjU3NTAyOTgxOTdlYTMzZTEzYmEyZCIsInN1YiI6IjY1ZjI1ZTVjMmZkZWM2MDE3MDIxOGVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OlShGZBsYMzfdminRWQTrcgcT_tn5G7_9QXa92iRne8'
  },
  params: {
    api_key: apiKey
  }
});

export default api;
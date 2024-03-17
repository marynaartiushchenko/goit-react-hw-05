import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWUxYWExOGZjMjU3NTAyOTgxOTdlYTMzZTEzYmEyZCIsInN1YiI6IjY1ZjI1ZTVjMmZkZWM2MDE3MDIxOGVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OlShGZBsYMzfdminRWQTrcgcT_tn5G7_9QXa92iRne8'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));




// const apiKey = "cae1aa18fc25750298197ea33e13ba2d";

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWUxYWExOGZjMjU3NTAyOTgxOTdlYTMzZTEzYmEyZCIsInN1YiI6IjY1ZjI1ZTVjMmZkZWM2MDE3MDIxOGVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OlShGZBsYMzfdminRWQTrcgcT_tn5G7_9QXa92iRne8'
//   },
//   params: {
//     api_key: apiKey
//   }
// });

// export default api;
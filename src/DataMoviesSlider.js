import { API_KEY } from "./app/config";


export const DataMoviesSlider = [
  {
    MovieKind: "Top Rated",
    api: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    MovieKind: "Action",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  },
  {
    MovieKind: "Animation",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16`,
  },
  {
    MovieKind: "Fantasy",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=14`,
  },
  {
    MovieKind: "Music",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=10402`,
  },
];

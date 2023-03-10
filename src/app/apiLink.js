const API_KEY = "b4f6e7280ee2ad2a76a4d59293e74d60"; 

export const api_object = {
  topRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  actionMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  animation: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16`,
  fantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=14`,
};

export const api_backdrop = {
  backdrop: `https://image.tmdb.org/t/p/w1280/`,
};
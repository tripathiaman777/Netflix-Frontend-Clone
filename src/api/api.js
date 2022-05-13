const API_KEY="802726f0cb27907a31b86d21b7c8c60a";

const api={
      fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network-213`,
      fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with=genres-28`,
      fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with=genres-25`,
      fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with=genres-27`,
      fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with=genres-10749`,
      fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with=genres-99`,
};

export default api;
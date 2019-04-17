export enum EApi {
  urlMovieDB = 'https://api.themoviedb.org/3',
  getMoviesInTheaters = '/discover/movie?primary_release_date.gte=2019-03-12&primary_release_date.lte=2019-04-12',
  getPopularMovies = '/discover/movie?sort_by=popularity.desc',
  bestCIFIMovies = '/discover/movie?with_genres=878&sort_by=vote_average.desc',
  searchMovie = '/search/movie?query',
  getMovie = '/movie/',
  getPopularKidsMovies = '/discover/movie?sort_by=popularity.desc'
}

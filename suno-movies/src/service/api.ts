import axios from 'axios'

export const apiKey = '72f312d31dcf31a78d76ad78681ea28a'
const movieUrl = `/movie`
const genreUrl = `/genre/movie/list`
const latestUrl = `/movie/latest`
const topRatedUrl = `/movie/top_rated`
const nowUrl = '/movies/now_playing'


export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});



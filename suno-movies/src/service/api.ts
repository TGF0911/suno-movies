import axios from 'axios'

export const apiKey = '72f312d31dcf31a78d76ad78681ea28a'


export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});



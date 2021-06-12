import { createContext, ReactNode, useState, useContext } from 'react'
import { api, apiKey } from '../service/api'

//https://api.themoviedb.org/3/movie/now_playing?api_key=72f312d31dcf31a78d76ad78681ea28a&language=pt-BR

interface ListContextPorps {
  children: ReactNode;
}

type Movie = {
  id: number;
  genreIds : number[];
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
}

type ListContextData = {
  page: number;
  totalResults: number;
  totalPages: number;
  movieList: Movie[];
  getMovies: () => void;
}

const ListContext = createContext({} as ListContextData)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
const [totalPages, setTotalPages] = useState(0)
const [movieList, setMovieList] = useState([])

export function ListProvider({ children }: ListContextPorps) {

  async function getMovies() {
    const { data } = await api.get('/movies/now_playing', {
      params : {
        apiKey,
        language: 'pt-BR',
        page
      }
    })

    setMovieList(data.results)
    setTotalPages(data.total_pages)
    setTotalResults(data.total_results)
  }

  function genreFilter() {

  }

  function searchMovies(searchValue : string){

  }

  return (
    <ListContext.Provider value={{
      page,
      totalResults,
      totalPages,
      movieList,
      getMovies,
    }}>
      {children}
    </ListContext.Provider>
  )
}

export const useList = () => useContext(ListContext)
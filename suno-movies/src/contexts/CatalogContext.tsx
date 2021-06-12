import { createContext, ReactNode, useState, useContext } from 'react'
import { api, apiKey } from '../service/api'

//https://api.themoviedb.org/3/movie/now_playing?api_key=72f312d31dcf31a78d76ad78681ea28a&language=pt-BR

interface CatalogContextPorps {
  children: ReactNode;
}

type Movie = {
  id: number;
  genreIds: number[];
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
}

type CatalogContextData = {
  page: number;
  totalResults: number;
  totalPages: number;
  movieList: Movie[];
  getMovies: () => void;
}

const CatalogContext = createContext({} as CatalogContextData)

export function ListProvider({ children }: CatalogContextPorps) {

  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [movieList, setMovieList] = useState([])

  async function getMovies() {
    const { data } = await api.get('/movie/now_playing', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page
      }
    })

    setMovieList(data.results)
    setTotalPages(data.total_pages)
    setTotalResults(data.total_results)
    setPage(page)
  }

  async function ratingFilter(rating: string) {
    const { data } = await api.get('/movie/top_rated', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      }
    })
  }

  async function genreFilter(genderId: number) {
    const { data } = await api.get('/movie', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        with_genres: genderId,
        page
      }
    })

    setMovieList(data.results)
    setTotalPages(data.total_pages)
    setTotalResults(data.total_results)
  }


  return (
    <CatalogContext.Provider value={{
      page,
      totalResults,
      totalPages,
      movieList,
      getMovies,
    }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useList = () => useContext(CatalogContext)
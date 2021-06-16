import { createContext, ReactNode, useState, useContext } from 'react'
import { api, apiKey } from '../service/api'

//https://api.themoviedb.org/3/movie/now_playing?api_key=72f312d31dcf31a78d76ad78681ea28a&language=pt-BR

interface CatalogContextProps {
  children: ReactNode;
}

type Movie = {
  id: number;
  genre_ids: number[];
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

type CatalogContextData = {
  page: number;
  movieList: Movie[];
  getMovies: () => void;
  loadingMore: () => void;
  topRating: () => void;
  genreFilter: (genresId: number) => void;
}

const CatalogContext = createContext({} as CatalogContextData)

export function CatalogProvider({ children }: CatalogContextProps) {

  const [page, setPage] = useState(1)
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [url, setUrl] = useState([''])

  async function getMovies() {
    const { data } = await api.get('/movie/popular', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      }
    })

    setMovieList(data.results)
    setPage(data.page)
    setUrl(['/movie/popular'])
  }

  async function topRating() {
    const { data } = await api.get('/movie/top_rated', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      }
    })
    setMovieList(data.results)
    setPage(data.page)
    setUrl(['/movie/top_rated'])
  }


  async function genreFilter(genreId: number) {
    const { data } = await api.get('/discover/movie', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        with_genres: genreId,
      }
    })
    setMovieList(data.results)
    setPage(data.page)
    setUrl(['/discover/movie', String(genreId)])
  }

  async function loadingMore() {
    const { data } = await api.get(url[0], {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: page + 1,
        with_genres: url[1] || ''
      }
    })
    setMovieList([...movieList, ...data.results])
    setPage(page + 1)
  }


  return (
    <CatalogContext.Provider value={{
      page,
      movieList,
      getMovies,
      loadingMore,
      genreFilter,
      topRating
    }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalog = () => useContext(CatalogContext)
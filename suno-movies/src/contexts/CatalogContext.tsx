import { createContext, ReactNode, useState, useContext } from 'react'
import { api, apiKey } from '../service/api'

//https://api.themoviedb.org/3/movie/now_playing?api_key=72f312d31dcf31a78d76ad78681ea28a&language=pt-BR

interface CatalogContextPorps {
  children: ReactNode;
}

type Genre = {
  id: number;
  name: string | null;
}

type Movie = {
  id: number;
  genreIds: Genre[];
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

//TALVEZ NÃO PRECISE DE TODAS ESSAS INFOS
type CatalogContextData = {
  page: number;
  movieList: Movie[];
  getMovies: () => void;
  loadingMore: () => void;
  genreFilter: (genresId: number[]) => void;
}

const CatalogContext = createContext({} as CatalogContextData)

export function CatalogProvider({ children }: CatalogContextPorps) {

  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [isFilter, setIsFilter] = useState(false)

  async function getMovies() {
    const { data } = await api.get('/movie/popular', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      }
    })

    setMovieList(data.results)
  }

  async function topRating(rating: string) {
    const { data } = await api.get('/movie/top_rated', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      }
    })

    setMovieList(data.results)
    setTotalPages(data.total_pages)
    setTotalResults(data.total_results)
  }

  ////discover/movie
  //vote_average.asc, vote_average.desc
  async function sortBy(sortType: string, genderId?: number[]) {
    if (isFilter) {
      const { data } = await api.get('/discover/movie', {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
          sort_by: sortType,
          with_genres: genderId,
        }
      })
      setMovieList(data.results)
    } else {
      const { data } = await api.get('/discover/movie', {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
          sort_by: sortType,
        }
      })
      setMovieList(data.results)
    }
  }

  async function genreFilter(genderId: number[]) {
    const { data } = await api.get('/discover/movie', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        with_genres: genderId,
      }
    })

    setMovieList(data.results)
    setIsFilter(true)
  }

  //Mandar a url como parametro
  //Pensar mais sobre a page (Talvez precise ser mandado como parametro também)
  async function loadingMore() {
    const { data } = await api.get('/movie/popular', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: page + 1
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
      genreFilter
    }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalog = () => useContext(CatalogContext)
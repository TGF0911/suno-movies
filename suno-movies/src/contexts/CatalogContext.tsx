import { createContext, ReactNode, useState, useContext } from 'react'
import { api, apiKey } from '../service/api'

//https://api.themoviedb.org/3/movie/now_playing?api_key=72f312d31dcf31a78d76ad78681ea28a&language=pt-BR

interface CatalogContextPorps {
  children: ReactNode;
}

type Genre = {
  id: number;
  name: string;
}

type Movie = {
  id: number;
  genreIds: number[];
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
  sortBy: (sortType: string) => void;
}

const CatalogContext = createContext({} as CatalogContextData)

export function CatalogProvider({ children }: CatalogContextPorps) {

  const [page, setPage] = useState(1)
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
    setPage(data.page)
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
  }

  ////discover/movie
  //vote_average.desc
  async function sortBy(sortType: string) {
    if (isFilter) {
      const { data } = await api.get('/discover/movie', {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
          sort_by: sortType,
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
      setPage(data.page)
    }
  }

  async function genreFilter(genderId: number) {
    const { data } = await api.get('/discover/movie', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        with_genres: genderId,
      }
    })
    setMovieList(data.results)
    setPage(data.page)
    setIsFilter(true)
  }

  //Mandar a url como parametro - talvez com um estado e um if na function do Catalog
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
      genreFilter,
      sortBy,
      topRating
    }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalog = () => useContext(CatalogContext)
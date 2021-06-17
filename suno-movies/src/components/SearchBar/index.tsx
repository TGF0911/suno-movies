import { FormEvent, useState } from "react";
import { api, apiKey } from "../../service/api";
import {
  MovieCard,
  MovieGenres,
  MovieImage,
  MovieInfos,
  MovieRating,
  MovieTitle,
  RatingContainer,
  RatingStar,
  SearchContainer,
  Search,
  SearchInput,
  SearchList,
  SearchText 
} from "./SearchElements";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface SearchProps {
  toggle: () => void;
  isOpen: boolean;
}

export const SearchBar = ({isOpen} : SearchProps) => {
  const [searchMovie, setSearchMovies] = useState<Movie[]>([])
  const [searchValue, setSearchValue] = useState('')


  async function searchMovies(searchValue: string , e : FormEvent) {
    e.preventDefault()
    const { data } = await api.get('/search/movie/', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        query: searchValue
      }
    })
    if (data.results.length === 0) {
      return (
        <SearchText>Não encontramos nenhum filme com este nome. Tente novamente.</SearchText>
      )
    }
    setSearchMovies(data.results)
  }

  return (
    <SearchContainer theme={{isOpen}}>
      <Search onSubmit={(e) => searchMovies(searchValue, e)}>
        <SearchInput value={searchValue} onChange={e => setSearchValue(e.target.value)}  />
      </Search>
      <SearchList>
        {
          searchMovie.map(movie => (
            <MovieCard>
              <MovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>

              <MovieInfos>
                <MovieTitle to={`/movie/details/${movie.id}`}>{movie.title}</MovieTitle>
                <MovieGenres>Comédia</MovieGenres>

                <RatingContainer>
                  <RatingStar />
                  <MovieRating>{movie.vote_average}</MovieRating>
                </RatingContainer>
              </MovieInfos>
            </MovieCard>
          ))
        }
      </SearchList>

    </SearchContainer>
  )
}
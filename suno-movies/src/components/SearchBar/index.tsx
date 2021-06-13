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
  SearcContainer,
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

export const SearchBar = () => {
  const [searchMovie, setSearchMovies] = useState<Movie[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  //Talvez precise de mais um icone pra enviar a requisiçaĩo
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
        <SearchText>Não encontamos nenhum filme com este nome. Tente novamente.</SearchText>
      )
    }
    setSearchMovies(data.results)
  }

  function toggle() {
    setIsOpen(!isOpen)
  }

  function onKeyUp(e : KeyboardEvent){
    if(e.key === 'Enter'){
      //setSearchValue(e.target)
    }
  }


  return (
    <SearcContainer  >
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

    </SearcContainer>
  )
}
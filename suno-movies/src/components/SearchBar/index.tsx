import {FormEvent, useState} from "react";
import { api, apiKey } from "../../service/api";
import { MovieCard, MovieGenres, MovieImage, MovieInfos, MovieRating, MovieTitle, RatingContainer, RatingStar, SearcContainer, Search, SearchInput, SearchList } from "./SearchElements";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  rating: number;
}

export const SearchBar = () => {
  const [searchMovie, setSearchMovies] = useState<Movie[]>([])
  const [searchValue, setSearchValue] = useState('')

  //Talvez precise de mais um icone pra enviar a requisiçaĩo
  async function searchMovies(searchValue: string) {
    const { data } = await api.get('/search/movie/', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        query: searchValue
      }
    })
    if(data.results.length === 0 ){
      return (
        <p>Não encontamos nenhum filme com este nome. Tente novamente.</p>
      )
    }
    setSearchMovies(data.results)
  }

  

  return(
    <SearcContainer>
      <Search>
        <SearchInput value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyUp={() => searchMovies} />
      </Search>

    <SearchList>
      <MovieCard>
        <MovieImage />

        <MovieInfos>
          <MovieTitle>The Specials</MovieTitle>
          <MovieGenres>Comédia</MovieGenres>

          <RatingContainer>
            <RatingStar />
            <MovieRating>8.9</MovieRating>
          </RatingContainer>
        </MovieInfos>
      </MovieCard>
    </SearchList>

    </SearcContainer>
  )
}
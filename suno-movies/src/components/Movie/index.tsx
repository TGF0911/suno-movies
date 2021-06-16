import { useEffect, useState } from "react"
import { api, apiKey } from "../../service/api"
import {
  MovieCard,
  DescriptionContainer,
  MovieGenre,
  MovieImageContainer,
  MovieInfo,
  MovieRating,
  MovieTitle,
  PlayLink,
  PlayLinkContainer,
  RatingContainer,
  RatingStar
} from "./MovieElements"

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  genre: number[];
  vote_average: number;
  overview?: string;
  isLatest: boolean;
  isGrid: boolean;
}

type Genre = {
  id: number;
  name: string;
}

export const Movie = ({ id, title, poster_path, genre, vote_average, overview, isLatest, isGrid }: MovieProps) => {
  const [genreList, setGenreList] = useState<Genre[]>([])

  useEffect(() => {
    api.get('/genre/movie/list', {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setGenreList(data.genres))
  }, [])

  function getGenres(){
    const movie_genres = genre.map((id) => genreList.find(genre => genre.id === id)?.name)
    const genresNames = movie_genres.join(', ')
    return genresNames
  }

  return (
    <MovieCard theme={{isLatest}} >
      <MovieImageContainer theme={{isLatest}}>
        <PlayLinkContainer to={`/movie/details/${id}`} className='play' theme={{isLatest}}>
          <PlayLink />
        </PlayLinkContainer >
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      </MovieImageContainer>
      <MovieInfo theme={{isLatest}}>
        <MovieTitle to={`/movie/details/${id}`} theme={{isLatest, isGrid}} >{title}</MovieTitle>
        <MovieGenre theme={{isLatest, isGrid}}>{getGenres()}</MovieGenre>
        <RatingContainer>
          <RatingStar />
          <MovieRating>{vote_average}</MovieRating>
        </RatingContainer>
        <DescriptionContainer theme={{isLatest, isGrid}} >
          <p>{overview}</p>
        </DescriptionContainer>
      </MovieInfo>
    </MovieCard>
  )
}

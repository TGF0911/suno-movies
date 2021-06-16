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
}

export const Movie = ({ id, title, poster_path, genre, vote_average, overview, isLatest }: MovieProps) => {
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    api.get('/genre/movie/list', {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setGenreList(data.genres))
    
  }, [])

  function getGenre(){  
    const names: string[] = []
    genre.map(id => {
      names.push()
    })
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
        <MovieTitle to={`/movie/details/${id}`} theme={{isLatest}} >{title}</MovieTitle>
        <MovieGenre theme={{isLatest}}>Comédia</MovieGenre>
        <RatingContainer>
          <RatingStar />
          <MovieRating>{vote_average}</MovieRating>
        </RatingContainer>
        <DescriptionContainer theme={{isLatest}} >
          <p>{overview}</p>
        </DescriptionContainer>
      </MovieInfo>
    </MovieCard>
  )
}

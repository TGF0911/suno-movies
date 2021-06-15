import { useEffect, useState } from "react"
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
  //genre:number[];
  vote_average: number;
  overview: string;
}

export const Movie = ({ id, title, poster_path, vote_average, overview }: MovieProps) => {
  //const [genres, setGenres] = useState<string>()

  // useEffect(() => {
  //   const names: string[] = []
  //   genre.map(genre => {
  //     names.push(genre.name)
  //   })
  //   const genre = names?.join(', ')
  //   setGenres(genre)

  // }, [genres])

  return (
    <MovieCard  >
      <MovieImageContainer>
        <PlayLinkContainer to={`/movie/details/${id}`} className='play'>
          <PlayLink />
        </PlayLinkContainer>
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      </MovieImageContainer>
      <MovieInfo>
        <MovieTitle to={`/movie/details/${id}`}>{title}</MovieTitle>
        <MovieGenre>Comédia</MovieGenre>
        <RatingContainer>
          <RatingStar />
          <MovieRating>{vote_average}</MovieRating>
        </RatingContainer>
        <DescriptionContainer>
          <p>{overview}</p>
        </DescriptionContainer>
      </MovieInfo>
    </MovieCard>
  )
}

import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Navbar } from '../../components/Navbar'
import { api, apiKey } from '../../service/api'
import { BackButton, ButtonContainer, DetailsContainer, DetailTitle, MovieDescription, MovieDetails, MovieGenre, MovieImage, MovieInfoGroup, MovieInfos, MovieRating, MovieTitle, RatingContainer, RatingStar, TrailerContainer } from './DetailsElements'

type Movie = {
  id: number;
  genres: {
    id: number;
    name:string;
  }[];
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

type Video = {
  id: number;
  key: string;
  site: string;
}

interface RouteParams {
  id: string;
}

export default function Details() {
  const params = useParams<RouteParams>()
  const { id } = params

  const [movie, setMovie] = useState<Movie>()
  const [videos, setVideos] = useState<Video[]>([])
  const [genres, setGenres] = useState<string>()

  useEffect(() => {
    api.get(`/movie/${id}`, {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setMovie(data))
  }, [apiKey, id])

  useEffect(() => {
    api.get(`/movie/${id}/videos`, {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setVideos(data.results))
  }, [apiKey, id])

  useEffect(()=> {
    const names: string[] = []
    movie?.genres.map(genre => {
      names.push(genre.name)
    })
    const genre = names?.join(', ')
    setGenres(genre) 

  }, [movie?.genres])

  return (
    <>
      <Navbar />
      <DetailsContainer>

        <MovieDetails>
          <MovieImage src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
          <MovieInfoGroup>
            <MovieTitle>{movie?.title}</MovieTitle>
            <MovieInfos>
              <MovieGenre>{genres}</MovieGenre>
              <RatingContainer>
                <RatingStar />
                <MovieRating>{movie?.vote_average}</MovieRating>
              </RatingContainer>
            </MovieInfos>

            <DetailTitle>Sinopse</DetailTitle>
            <MovieDescription>{movie?.overview}</MovieDescription>
          </MovieInfoGroup>
        </MovieDetails>

        <TrailerContainer>
          <h4>Trailer</h4>
          <hr />
          {
            videos.length === 0 ? (
              <MovieDescription>Este filme não tem um trailer cadastrado.</MovieDescription>
            ) : (
              <div className="trailer">
                {
                  videos.slice(0, 1).map(video => (
                     <ReactPlayer 
                     url={video.site === 'YouTube' ? `https://www.youtube.com/watch?v=${video.key}` : `https://vimeo.com/${video.key}`}
                     controls={true}
                     width='100%'
                     height='100%'
                     />
                  ))
                }
              </div>
            )
          }
        </TrailerContainer>

        <ButtonContainer>
          <BackButton to='/home'>Voltar</BackButton>
        </ButtonContainer>
      </DetailsContainer>
    </>
  )
}

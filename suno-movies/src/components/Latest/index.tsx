import { useEffect, useState } from "react"
import { api, apiKey } from "../../service/api"
import {
  Carousel,
  CarouselInner,
  LatestContainer,
  LatestDot,
  LatestHeader,
  LatestTitle,
  MovieCard,
  MovieTitle,
  MovieRating,
  MovieDetails,
  MovieImage,
  RatingContainer,
  RatingStar,
  ArrowRigth,
  ArrowLeft
} from "./LatestElements"

//isActive={isActive} activeIndex={activeIndex}

interface Movie {
  id: number;
  genreIds: number[];
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

export const Latest = () => {
  //const [isActive, setIsActive] = useState(false)
  const [latestList, setLatestList] = useState<Movie[]>([])

  const [limit, setLimit] = useState(4);
  const [activeIndex, setactiveIndex] = useState(0)

  useEffect(() => {
    api.get('/movie/now_playing', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      }
    }).then(({ data }) => setLatestList(data.results))
    console.log(latestList)
  }, [apiKey])



  function nextCard() {
    if (activeIndex + 5 < 15) {
      setLimit(limit + 5)
      setactiveIndex(activeIndex + 5)
      console.log(activeIndex)
    } else {
      setLimit(4)
      setactiveIndex(0)
    }
  }

  function previousCard() {
    if (activeIndex - 5 > 0) {
      setLimit(limit - 5)
      setactiveIndex(activeIndex - 5)
      console.log(activeIndex)
    } else {
      setLimit(13)
      setactiveIndex(15)
    }
  }

  return (
    <LatestContainer>
      <LatestHeader>
        <LatestDot />
        <LatestTitle><span>Lançamentos</span> da semana</LatestTitle>
      </LatestHeader>
      <Carousel>
        <ArrowLeft onClick={previousCard} />
        <CarouselInner>
          {
            latestList.slice(activeIndex, limit).map(movie => (
              <MovieCard key={movie.id}>
                <MovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                <MovieDetails>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <RatingContainer>
                    <RatingStar />
                    <MovieRating>{movie.vote_average}</MovieRating>
                  </RatingContainer>
                </MovieDetails>
              </MovieCard>
            ))
          }
        </CarouselInner>
        <ArrowRigth onClick={nextCard} />
      </Carousel>
    </LatestContainer>
  )
}

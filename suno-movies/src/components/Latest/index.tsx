import { useEffect, useState } from "react"
import { api, apiKey } from "../../service/api"
import { Carousel, CarouselInner, LatestContainer, LatestDot, LatestHeader, LatestTitle, MovieCard, MovieTitle, MovieRating, MovieDetails, MovieImage, RatingContainer, RatingStar } from "./LatestElements"

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
  const [activeIndex, setactiveIndex] = useState(0)
  const [latestList, setLatestList] = useState<Movie[]>([])

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
    if (activeIndex + 1 < 2) {
      setactiveIndex(activeIndex + 1)
    } else {
      setactiveIndex(0)
    }
  }

  function previousCard() {
    if (activeIndex > 0) {
      setactiveIndex(activeIndex - 1)
    } else {
      setactiveIndex(2)
    }
  }

  return (
    <LatestContainer>
      <LatestHeader>
        <LatestDot />
        <LatestTitle><span>Lançamentos</span> da semana</LatestTitle>
      </LatestHeader>
      <Carousel>
        {/* <button onClick={previousCard}>Anterior</button> */}
        <CarouselInner activeIndex={activeIndex} >
          {
            latestList.slice(0, 12).map(movie => (
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
        {/* <button onClick={nextCard}>Proximo</button> */}
      </Carousel>
    </LatestContainer>
  )
}

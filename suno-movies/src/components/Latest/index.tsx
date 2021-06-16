import { useEffect, useState } from "react"
import { api, apiKey } from "../../service/api"
import { Movie } from "../Movie"
import {
  Carousel,
  CarouselInner,
  LatestContainer,
  LatestDot,
  LatestHeader,
  LatestTitle,
  ArrowRigth,
  ArrowLeft,
} from "./LatestElements"

interface Movie {
  id: number;
  genre_ids: number[];
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

export const Latest = () => {
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
  }, [])



  function nextCard() {
    if (activeIndex + 5 < 15) {
      setLimit(limit + 5)
      setactiveIndex(activeIndex + 5)
    } else {
      setLimit(4)
      setactiveIndex(0)
    }
  }

  function previousCard() {
    if (activeIndex - 5 < 1) {
      setLimit(limit - 5)
      setactiveIndex(activeIndex - 5)
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
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                genre={movie.genre_ids}
                isLatest={true}
              />
            ))
            
          }
        </CarouselInner>
        <ArrowRigth onClick={nextCard} />
      </Carousel>
    </LatestContainer>
  )
}

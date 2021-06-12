import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCatalog } from '../../contexts/CatalogContext'

import {
  CatalogHeader,
  CatalogDot,
  CatalogTitle,
  CatalogContainer,
  CatalogItem,
  CatalogList,
  MovieImageContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  RatingStar,
  MovieRating,
  MovieDescription,
  ButtonConatiner,
  LoadingButton,
  RatingContainer
} from './CatalogElements'

//Mudar nome do componente
export const Catalog = () => {
  const { movieList, getMovies, loadingMore, page } = useCatalog()

  const [limit, setLimit] = useState(4);
  const [count, setCount] = useState(0)

  useEffect(() => {
    getMovies()
  }, [])

  function changeLimit() {
    if (count % 5 === 0) {
      loadingMore()
      setCount(count + 1)
      console.log('Page:', page)
    }
    setLimit(limit + 4);
    setCount(count + 1)
  }

  return (
    <>
      <CatalogHeader>
        <CatalogDot />
        <CatalogTitle><span>Catálogo</span> Completo</CatalogTitle>
      </CatalogHeader>
      <CatalogContainer>
        <CatalogList>
          {
            movieList.slice(0, limit).map((movie, index) => (
              <CatalogItem key={movie.id} >
                <MovieImageContainer>
                  <MovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={300} />
                </MovieImageContainer>
                <MovieInfo>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <RatingContainer>
                    <RatingStar />
                    <MovieRating> {movie.vote_average}</MovieRating>
                  </RatingContainer>
                  <MovieDescription>{movie.overview}</MovieDescription>
                </MovieInfo>
              </CatalogItem>
            ))
          }

          <ButtonConatiner>
            <LoadingButton onClick={changeLimit} >Carregar Mais</LoadingButton>
          </ButtonConatiner>
        </CatalogList>

      </CatalogContainer>
    </>
  )
}
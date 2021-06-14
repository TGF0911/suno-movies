import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCatalog } from '../../contexts/CatalogContext'
import { api, apiKey } from '../../service/api'
import { SelectFilter } from '../SelectFilter'

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
  RatingContainer,
  SelectGroup,
  Button,
  Group,
  DescriptionContainer,
  PlayLink
} from './CatalogElements'

type Genre = {
  id: number;
  name: string;
}

export const Catalog = () => {
  const { movieList, getMovies, loadingMore, genreFilter, sortBy } = useCatalog()

  const [limit, setLimit] = useState(6);
  const [count, setCount] = useState(0)
  const [genres, setGenres] = useState<Genre[]>([])
  const [genreNames, setGenreNames] = useState('')

  useEffect(() => {
    getMovies()
  }, [])

  function changeLimit() {
    if (count % 5 === 0) {
      loadingMore()
      setCount(count + 1)
    }
    setLimit(limit + 4);
    setCount(count + 1)
  }

  //Isso tem que ter nos componentes - Catalogo, Latest, SearchBar
  //Pegar os generos dos movies da movieList e transformar em string
  //comparar os genreId da movieList com os genres 
  //Transformar os genres em string -- Igual no Details

  async function getGenres() {
    await api.get('/genre/movie/list', {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setGenres(data.genres))

  }


  return (
    <>
      <CatalogHeader>
        <CatalogDot />
        <CatalogTitle><span>Catálogo</span> Completo</CatalogTitle>
      </CatalogHeader>
      <CatalogContainer>
        <SelectGroup >
          <Group>
            <SelectFilter type='genre' />
            <Button onClick={() => sortBy('vote_average.desc')} >mais populares</Button>
          </Group>
          <SelectFilter type='list' />
        </SelectGroup>
        <CatalogList >
          {
            movieList.slice(0, limit).map((movie, index) => (
              <CatalogItem key={movie.id} >
                <MovieImageContainer>
                  <MovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={300} />
                  <PlayLink to={`/movie/details/${movie.id}`} />
                </MovieImageContainer>
                <MovieInfo>
                  <MovieTitle to={`/movie/details/${movie.id}`}>{movie.title}</MovieTitle>
                  <RatingContainer>
                    <RatingStar />
                    <MovieRating> {movie.vote_average}</MovieRating>
                  </RatingContainer>
                  <DescriptionContainer>
                    <MovieDescription>{movie.overview}</MovieDescription>
                  </DescriptionContainer>
                </MovieInfo>
              </CatalogItem>
            ))
          }

          <ButtonConatiner>
            <Button onClick={changeLimit} >Carregar Mais</Button>
          </ButtonConatiner>
        </CatalogList>

      </CatalogContainer>
    </>
  )
}
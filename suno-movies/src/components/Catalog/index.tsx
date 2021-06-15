import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCatalog } from '../../contexts/CatalogContext'
import { api, apiKey } from '../../service/api'
import { Movie } from '../Movie'
import { SelectFilter } from '../SelectFilter'

import {
  CatalogHeader,
  CatalogDot,
  CatalogTitle,
  CatalogContainer,
  CatalogList,
  ButtonConatiner,
  SelectGroup,
  Button,
  Group,
  CatalogDiv,

} from './CatalogElements'

type Genre = {
  id: number;
  name: string;
}

export const Catalog = () => {
  const { movieList, getMovies, loadingMore, genreFilter, topRating } = useCatalog()

  const [limit, setLimit] = useState(6);
  const [count, setCount] = useState(0)
  //const [genres, setGenres] = useState<Genre[]>([])
  //const [genreNames, setGenreNames] = useState('')

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

  // async function getGenres() {
  //   await api.get('/genre/movie/list', {
  //     params: {
  //       api_key: apiKey,
  //       language: 'pt-BR'
  //     }
  //   }).then(({ data }) => setGenres(data.genres))

  // }



  return (
    <CatalogDiv>
      <CatalogHeader>
        <CatalogDot />
        <CatalogTitle><span>Catálogo</span> Completo</CatalogTitle>
      </CatalogHeader>
      <CatalogContainer>
        <SelectGroup >
          <Group>
            <SelectFilter type='genre' />
            <Button onClick={() => topRating()} >mais populares</Button>
          </Group>
          <SelectFilter type='list' className='list-type' />
        </SelectGroup>
        <CatalogList >
          {
            movieList.slice(0, limit).map((movie, index) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              //genre={movie.genreIds}
              />
            ))
          }

        </CatalogList>
        <ButtonConatiner>
          <Button onClick={changeLimit} >Carregar Mais</Button>
        </ButtonConatiner>

      </CatalogContainer>
    </CatalogDiv>
  )
}
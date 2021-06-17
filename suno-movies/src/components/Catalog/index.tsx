import { useState, useEffect } from 'react'
import { useCatalog } from '../../contexts/CatalogContext'
import { Movie } from '../Movie'
import { SelectFilter } from '../SelectFilter'

import {
  CatalogHeader,
  CatalogDot,
  CatalogTitle,
  CatalogContainer,
  CatalogList,
  ButtonContainer,
  SelectGroup,
  Button,
  Group,
  CatalogDiv,

} from './CatalogElements'

export const Catalog = () => {
  const { movieList, getMovies, loadingMore, topRating, isGrid } = useCatalog()

  const [limit, setLimit] = useState(6);
  const [count, setCount] = useState(0)

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

  return (
    <CatalogDiv id='catalog'>
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
          <SelectFilter type='list' className="list-type"/>
        </SelectGroup>
        <CatalogList theme={{isGrid}}>
          {
            movieList.slice(0, limit).map((movie, index) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                genre={movie.genre_ids}
                isLatest={false}
                isGrid={isGrid}
              />
            ))
          }

        </CatalogList>
        <ButtonContainer>
          <Button onClick={changeLimit} className='loading' >Carregar Mais</Button>
        </ButtonContainer>

      </CatalogContainer>
    </CatalogDiv>
  )
}
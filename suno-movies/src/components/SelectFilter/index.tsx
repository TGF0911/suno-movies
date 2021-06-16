import { SelectHTMLAttributes, useEffect, useState } from 'react'
import { useCatalog } from '../../contexts/CatalogContext'
import { api, apiKey } from '../../service/api'
import { Select, Option, SelectContainer } from './SelectFilterElements'

interface SelectFilterProps extends SelectHTMLAttributes<HTMLSelectElement>{
  type: string
  
}

interface Genre {
  id: number;
  name: string;
}


export const SelectFilter = ({ type, ...rest }: SelectFilterProps) => {
  const { genreFilter } = useCatalog()
  const [genre, setGenre] = useState<Genre[]>([])
  const [genreValue, setGenreValue] = useState(0)
  const [isGrid, setIsGrid] = useState('false')

  useEffect(() => {
    api.get('/genre/movie/list', {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setGenre(data.genres))
  }, [])

  useEffect(() => {
    genreFilter(genreValue)
  }, [genreValue])


  return (
    <>
      {
        type === 'list' ? (
          <Select className='list-type' value={isGrid} onChange={e => {
            setIsGrid(e.target.value)    
          }}>
            <Option value='false'>por lista</Option>
            <Option value='true'>por grid</Option>
          </Select>

        ) : (
          <Select value={genreValue} onChange={e => {
            setGenreValue(Number(e.target.value))    
          }}>
            <Option value="" hidden>por genêro</Option>
            {
              genre.map(genre => (
                <Option key={genre.id} value={genre.id} >{genre.name}</Option>
              ))
            }
          </Select>
        ) 
      }
    </>
  )
}
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
          <Select className='list-type'>
            <Option value='lista'>por lista</Option>
            <Option value='grid'>por grid</Option>
          </Select>

        ) : type ==='genre' ? (
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
        ) : (
          <Select>
            <Option value='more'>mais populares</Option>
            <Option value='less'>menos populares</Option>
          </Select>
        )
      }
    </>
  )
}
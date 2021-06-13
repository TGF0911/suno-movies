import { SelectHTMLAttributes, useEffect, useState } from 'react'
import { api, apiKey } from '../../service/api'
import { Select, Option } from './SelectFilterElements'

interface SelectFilterProps extends SelectHTMLAttributes<HTMLSelectElement>{
  type: string
  styleName: boolean;
}

interface Genre {
  id: number;
  name: string;
}


export const SelectFilter = ({ type, ...rest }: SelectFilterProps) => {
  const [genre, setGenre] = useState<Genre[]>([])

  useEffect(() => {
    api.get('/genre/movie/list', {
      params: {
        api_key: apiKey,
        language: 'pt-BR'
      }
    }).then(({ data }) => setGenre(data.genres))
  }, [apiKey])

  return (
    <>
      {
        type === 'list' ? (
          <Select>
            <Option value='lista'>por lista</Option>
            <Option value='grid'>por grid</Option>
          </Select>

        ) : type ==='genre' ? (
          <Select>

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
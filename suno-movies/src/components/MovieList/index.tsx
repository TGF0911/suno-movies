import React from 'react'
import { useEffect } from 'react'
import { useList } from '../../contexts/CatalogContext'

//Mudar nome do componente
export const MovieList = () => {
  const { movieList, getMovies } = useList()

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      <br />
      <br />
      <ul>
        {
          movieList.map((movie) => (
            <li key={movie.id}>
              <br />
              <p>{movie.title}</p>
              <br />
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={300}/>
              <br />
              <p>{movie.overview}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
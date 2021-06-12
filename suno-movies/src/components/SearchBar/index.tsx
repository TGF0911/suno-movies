import {useState} from "react";
import { api, apiKey } from "../../service/api";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  rating: number;
}

export const SearchBar = () => {
  const [searchMovie, setSearchMovies] = useState<Movie[]>([])

  async function searchMovies(searchValue: string) {
    const { data } = await api.get('/search/movie/', {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        query: searchValue
      }
    })

    if(data.results.length === 0 ){
      return (
        <p>Não encontamos nenhum filme com este nome. Tente novamente.</p>
      )
    }

    setSearchMovies(data.results)
  }

  return(
    <div></div>
  )
}
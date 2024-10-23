import type { Movie } from '@/types/movie'
import { useQuery } from '@tanstack/react-query'

export const getMoviesQueryKey = () => ['@tymex/movies']
export const useMovies = () => {
  return useQuery<Movie[]>({
    queryKey: getMoviesQueryKey(),
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/api/v1/movies')

      const data = await response.json()

      return data?.movies || []
    }
  })
}

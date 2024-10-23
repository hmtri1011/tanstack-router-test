import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

import type { Movie, MovieFilterParams } from '@/types/movie'

export const getMoviesQueryKey = (params?: MovieFilterParams) => ['@tymex/movies', params]
export const useMovies = (params?: MovieFilterParams) => {
  return useQuery<Movie[]>({
    queryKey: getMoviesQueryKey(params),
    queryFn: async () => {
      const qs = params
        ? queryString.stringify(params, {
            skipNull: true,
            skipEmptyString: true,
            arrayFormat: 'bracket'
          })
        : ''

      console.log(qs)

      const response = await fetch(`http://localhost:3001/api/v1/movies?${qs}`)

      const data = await response.json()

      return data?.movies || []
    }
  })
}

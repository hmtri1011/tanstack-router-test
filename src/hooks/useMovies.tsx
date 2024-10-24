import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

import type { Movie, MovieFilterParams } from '@/types/movie'

export const getMoviesQueryKey = (params?: MovieFilterParams) => ['@tymex/movies', params]
export const useMovies = (params?: MovieFilterParams) => {
  return useQuery<Movie[]>({
    queryKey: getMoviesQueryKey(params),
    queryFn: async () => {
      const { releaseYear, ...rest } = params || {}

      let qs = rest
        ? queryString.stringify(rest, {
            skipNull: true,
            skipEmptyString: true,
            arrayFormat: 'bracket'
          })
        : ''

      if (releaseYear?.length && releaseYear.length > 0) {
        // parse releaseYear to minReleaseYear and maxReleaseYear
        const [minReleaseYear, maxReleaseYear] = releaseYear

        const releaseYearQs = queryString.stringify(
          { minReleaseYear, maxReleaseYear },
          {
            skipNull: true,
            skipEmptyString: true
          }
        )

        qs = qs ? `${qs}&${releaseYearQs}` : releaseYearQs
      }

      const response = await fetch(`http://localhost:3001/api/v1/movies?${qs}`)

      const data = await response.json()

      return data?.movies || []
    }
  })
}

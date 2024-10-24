import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import type { Movie, MovieFilterParams } from '@/types/movie'
import { ENDPOINT_URL } from '@/utils/config'
import { stringifyQueryParams } from '@/utils/helper'

export const getMoviesQueryKey = (params?: MovieFilterParams) => ['@tymex/movies', params]
export const useMovies = (params?: MovieFilterParams) => {
  return useQuery<Movie[]>({
    queryKey: getMoviesQueryKey(params),
    queryFn: async () => {
      const qs = stringifyQueryParams(params)

      const response = await fetch(`${ENDPOINT_URL}/movies?${qs}`)

      const data = await response.json()

      return data?.movies || []
    }
  })
}

export const getInfiniteMoviesQueryKey = (params?: MovieFilterParams) => ['@tymex/infinite-movies', params]
export const useInfiniteMovies = (params?: MovieFilterParams) => {
  return useInfiniteQuery<Movie[]>({
    queryKey: getInfiniteMoviesQueryKey(params),
    queryFn: async ({ pageParam = 1 }) => {
      let qs = stringifyQueryParams(params)
      if (pageParam) {
        qs = qs ? `${qs}&page=${pageParam}` : `page=${pageParam}`
      }

      console.log('qs', qs)

      const response = await fetch(`${ENDPOINT_URL}/movies?${qs}`)

      const data = await response.json()

      return data?.movies || []
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: Movie[], pages: Movie[][]) => {
      return lastPage.length ? pages.length + 1 : undefined
    }
  })
}

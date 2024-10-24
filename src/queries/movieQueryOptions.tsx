import { queryOptions } from '@tanstack/react-query'
import { notFound } from '@tanstack/react-router'

import type { Movie } from '@/types/movie'
import { ENDPOINT_URL } from '@/utils/config'

export const movieQueryOptions = (movieId: string) =>
  queryOptions<Movie>({
    queryKey: ['@tymex/movie', { movieId }],
    queryFn: async () => {
      const res = await fetch(`${ENDPOINT_URL}/movies/${movieId}`)

      const data = await res.json()

      if (!data.movie) {
        throw notFound()
      }

      return data.movie
    }
  })

import { createFileRoute } from '@tanstack/react-router'

import { MovieDetail } from '@/container/MovieDetail'
import { movieQueryOptions } from '@/queries/movieQueryOptions'

export const Route = createFileRoute('/movies/$movieId')({
  // @ts-ignore
  loader: ({ context: { queryClient }, params: { movieId } }) => {
    return queryClient.ensureQueryData(movieQueryOptions(movieId))
  },
  component: MovieDetail,
  notFoundComponent: () => {
    return <p>Movie not found</p>
  }
})

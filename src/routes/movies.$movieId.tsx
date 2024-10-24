import { createFileRoute } from '@tanstack/react-router'

import { MovieDetail } from '@/container/MovieDetail'

export const Route = createFileRoute('/movies/$movieId')({
  // loader: async ({ params }) => {
  //   const movie = await fetchMovie(params.movieId)
  //   console.log('movie', movie)

  //   return movie
  // },
  component: MovieDetail,
  notFoundComponent: () => {
    return <p>Post not found</p>
  }
})

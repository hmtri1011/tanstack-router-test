import { useSuspenseQuery } from '@tanstack/react-query'

import { PageWrapper } from '@/components/PageWrapper'
import { Route } from '@/routes/movies.$movieId'
import { movieQueryOptions } from '@/queries/movieQueryOptions'

export const MovieDetail = () => {
  const movieId = Route.useParams().movieId
  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId))

  console.log('movie', movie)

  return (
    <PageWrapper>
      <main className='container grid grid-cols-12 sm:gap-x-8 gap-y-4 mx-auto px-4 sm:px-0'>{movie.title}</main>
    </PageWrapper>
  )
}

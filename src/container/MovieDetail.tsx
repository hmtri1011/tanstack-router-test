import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { CircleArrowLeft } from 'lucide-react'

import { PageWrapper } from '@/components/PageWrapper'
import { Route } from '@/routes/movies.$movieId'
import { movieQueryOptions } from '@/queries/movieQueryOptions'

export const MovieDetail = () => {
  const movieId = Route.useParams().movieId
  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId))

  return (
    <PageWrapper>
      <main
        className='container mx-auto'
        style={{
          viewTransitionName: `${movie.id}-detail`
        }}
      >
        <Link to={'/'}>
          <div className='flex items-center gap-x-4' data-testid='back-button'>
            <CircleArrowLeft className='w-10 h-10' />

            <h1 className='text-2xl font-bold'>{movie.title}</h1>
          </div>
        </Link>

        <iframe
          className='w-full md:w-2/3 aspect-video mx-auto mt-2'
          src={'https://www.youtube.com/embed/_lIu6T3Bp2I?si=x9YKIqzT3nBABcCo&amp;start=20'}
          title={movie.title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />

        <p className='text-muted-foreground'>
          <b>Release:</b> {movie.releaseYear}
        </p>
        <p className='text-muted-foreground'>
          <b>Genre:</b> {movie.genre.join(', ')}
        </p>

        <p className='mt-4 text-md text-muted-foreground'>{movie.description}</p>
      </main>
    </PageWrapper>
  )
}

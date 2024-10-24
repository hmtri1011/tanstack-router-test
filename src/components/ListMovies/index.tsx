import React, { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useInView } from 'react-intersection-observer'

import { Movie } from './Movie'
import { LoadingItem } from './LoadingItem'
import { Loading } from '../Loading'
import { useInfiniteMovies } from '@/hooks/useMovies'
import { useFilterStore } from '@/store/filter'

export const ListMovies = () => {
  const { search, releaseYear, genre } = useFilterStore(
    useShallow(state => ({
      search: state.search,
      releaseYear: state.releaseYear,
      genre: state.genres
    }))
  )

  const { ref, inView } = useInView({
    threshold: 1
  })
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteMovies({
    search,
    releaseYear,
    genre
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  console.log('ahihi isFetchingNextPage', isFetchingNextPage)

  if (isLoading)
    return (
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 10 }).map((_, index) => (
          <LoadingItem key={index} />
        ))}
      </div>
    )

  if (!data?.pages.length) return <div>No movies found</div>

  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {data.pages.map((pageData, i) => (
          <React.Fragment key={i}>
            {pageData.map(movie => (
              <Movie key={movie.id} {...movie} />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && Array.from({ length: 10 }).map((_, index) => <LoadingItem key={index} />)}
      </div>

      {hasNextPage ? (
        <div ref={ref} className='flex justify-center mt-4'>
          <Loading className='size-9' />
        </div>
      ) : (
        <p className='mt-4 text-center text-sm text-muted-foreground'>You have reached the end of the list</p>
      )}
    </div>
  )
}

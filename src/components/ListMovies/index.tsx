import { useShallow } from 'zustand/react/shallow'

import { Movie } from './Movie'
import { useMovies } from '@/hooks/useMovies'
import { useFilterStore } from '@/store/filter'
import { LoadingItem } from './LoadingItem'

export const ListMovies = () => {
  const { search, releaseYear, genre } = useFilterStore(
    useShallow(state => ({
      search: state.search,
      releaseYear: state.releaseYear,
      genre: state.genres
    }))
  )

  const { data, isLoading } = useMovies({
    search,
    releaseYear,
    genre
  })

  if (isLoading)
    return (
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 10 }).map((_, index) => (
          <LoadingItem key={index} />
        ))}
      </div>
    )

  if (!data?.length) return <div>No movies found</div>

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
      {data.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  )
}

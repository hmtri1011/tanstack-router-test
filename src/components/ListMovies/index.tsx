import { Movie } from './Movie'
import { useMovies } from '@/hooks/useMovies'

export const ListMovies = () => {
  const { data, isLoading } = useMovies()

  if (isLoading) return <div>Loading...</div>

  if (!data) return <div>No movies found</div>

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
      {data.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  )
}

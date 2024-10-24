import { Badge } from '../ui/badge'
import type { Genre, Movie as MovieType } from '@/types/movie'

export interface MovieProps extends MovieType {}

const GenreList = ({ genres }: { genres: Genre[] }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {genres.map(genre => (
        <Badge key={genre} className='bg-primary/90'>
          {genre}
        </Badge>
      ))}
    </div>
  )
}

export const Movie = ({ title, poster, releaseYear, description, genre }: MovieProps) => {
  return (
    <div className='p-4 rounded-[0.25rem] bg-bg-card shadow-sm'>
      <div className='relative'>
        <div className='absolute top-2 left-2'>
          <GenreList genres={genre} />
        </div>
        <img alt={title} src={poster} className='w-full h-52 rounded-md' />
        <p className='absolute bottom-0 left-0 px-2 py-1 w-full bg-black/60 text-white rounded-md'>{title}</p>
      </div>
      <div className='mt-1'>
        <p className='font-bold text-muted-foreground'>{releaseYear}</p>
        <p className='mt-3 text-sm line-clamp-3'>{description}</p>
      </div>
    </div>
  )
}

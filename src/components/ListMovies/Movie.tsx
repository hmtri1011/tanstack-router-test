import type { Movie as MovieType } from '@/types/movie'

export interface MovieProps extends MovieType {}

export const Movie = ({ title, poster, releaseYear, description }: MovieProps) => {
  return (
    <div className='p-4 rounded-md bg-bg-card'>
      <div className='relative'>
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

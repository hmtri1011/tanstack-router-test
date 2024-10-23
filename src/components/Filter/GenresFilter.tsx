import { useShallow } from 'zustand/react/shallow'

import { MultiSelect } from '@/components/ui/multi-select'
import { useFilterStore } from '@/store/filter'
import { Genre } from '@/types/movie'

export const genreOptions = [
  Genre.ACTION,
  Genre.COMEDY,
  Genre.DRAMA,
  Genre.HORROR,
  Genre.THRILLER,
  Genre.ROMANCE,
  Genre.SCIENCE_FICTION
].map(genre => ({
  value: genre,
  label: genre
}))

export const GenresFilter = () => {
  const { genres, setGenres } = useFilterStore(
    useShallow(state => ({
      genres: state.genres,
      setGenres: state.setGenres
    }))
  )

  return (
    <MultiSelect<Genre>
      options={genreOptions}
      onValueChange={setGenres}
      defaultValue={genres}
      placeholder='Select genres'
      variant='inverted'
      maxCount={5}
    />
  )
}

import { GenresFilter } from './GenresFilter'
import { SearchFilter } from './SearchFilter'
import { YearFilter } from './YearFilter'

export const Filter = () => {
  return (
    <div className='flex flex-col gap-6'>
      <SearchFilter />
      <YearFilter />
      <GenresFilter />
    </div>
  )
}

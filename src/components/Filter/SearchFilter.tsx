import { Input } from '@/components/ui/input'
import { useFilterStore } from '@/store/filter'

export interface SearchFilterProps {}

export const SearchFilter = () => {
  const setSearch = useFilterStore(state => state.setSearch)

  return <Input className='text-white' placeholder='Quick search...' onChange={e => setSearch(e.target.value)} />
}

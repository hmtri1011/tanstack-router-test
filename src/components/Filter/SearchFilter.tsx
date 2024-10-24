import { useCallback } from 'react'

import { Input } from '@/components/ui/input'
import { useFilterStore } from '@/store/filter'
import debounce from '@/lib/debounce'

export const SearchFilter = () => {
  const setSearch = useFilterStore(state => state.setSearch)

  const debouncedSetSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    }, 500),
    []
  )

  return <Input className='text-white' placeholder='Quick search...' onChange={debouncedSetSearch} />
}

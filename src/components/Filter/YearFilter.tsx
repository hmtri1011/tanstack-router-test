import { useCallback } from 'react'

import { useFilterStore } from '@/store/filter'
import { Slider } from '@/components/ui/slider'
import debounce from '@/lib/debounce'

export const YearFilter = () => {
  const setReleaseYear = useFilterStore(state => state.setReleaseYear)

  const debouncedSetReleaseYear = useCallback(
    debounce((values: number[]) => {
      console.log(values)
      setReleaseYear([values[0], values[1]])
    }, 500),
    []
  )

  return <Slider minStepsBetweenThumbs={1} min={2010} max={2024} step={1} onValueChange={debouncedSetReleaseYear} />
}

import { useFilterStore } from '@/store/filter'
import { Slider } from '@/components/ui/slider'

export const YearFilter = () => {
  const setReleaseYear = useFilterStore(state => state.setReleaseYear)

  const handleValueChange = (values: number[]) => {
    setReleaseYear([values[0], values[1]])
  }

  return <Slider minStepsBetweenThumbs={1} max={2024} min={2010} step={1} onValueChange={handleValueChange} />
}

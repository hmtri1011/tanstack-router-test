import { create } from 'zustand'

import type { Genre } from '@/types/movie'

interface FilterState {
  search: string
  genres: Genre[]
  releaseYear: [number, number]

  setSearch: (search: string) => void
  setGenres: (genres: Genre[]) => void
  setReleaseYear: (releaseYear: [number, number]) => void
}

export const useFilterStore = create<FilterState>(set => ({
  search: '',
  genres: [],
  releaseYear: [2010, 2024],

  setSearch: (search: string) => set({ search }),
  setGenres: (genres: Genre[]) => set({ genres }),
  setReleaseYear: (releaseYear: [number, number]) => set({ releaseYear })
}))

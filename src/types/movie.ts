export enum Genre {
  ACTION = 'ACTION',
  COMEDY = 'COMEDY',
  DRAMA = 'DRAMA',
  HORROR = 'HORROR',
  THRILLER = 'THRILLER',
  ROMANCE = 'ROMANCE',
  SCIENCE_FICTION = 'SCIENCE_FICTION'
}

export interface Movie {
  id: string
  title: string
  description: string
  releaseYear: number
  genre: Genre[]
  poster: string
  createdAt: string
  updatedAt: string
}

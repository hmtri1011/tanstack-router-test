import queryString from 'query-string'

import type { MovieFilterParams } from '@/types/movie'

export const stringifyQueryParams = (params: MovieFilterParams | undefined) => {
  const { releaseYear, ...rest } = params || {}

  let qs = rest
    ? queryString.stringify(rest, {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: 'bracket'
      })
    : ''

  if (releaseYear?.length && releaseYear.length > 0) {
    // parse releaseYear to minReleaseYear and maxReleaseYear
    const [minReleaseYear, maxReleaseYear] = releaseYear

    const releaseYearQs = queryString.stringify(
      { minReleaseYear, maxReleaseYear },
      {
        skipNull: true,
        skipEmptyString: true
      }
    )

    qs = qs ? `${qs}&${releaseYearQs}` : releaseYearQs
  }

  return qs
}

import { PageWrapper } from '@/components/PageWrapper'
import { Filter } from '@/components/Filter'
import { ListMovies } from '@/components/ListMovies'

function App() {
  return (
    <PageWrapper>
      <main className='container grid grid-cols-12 sm:gap-9 mx-auto px-4 sm:px-0'>
        <div className='col-span-12 sm:col-span-3'>
          <Filter />
        </div>

        <div className='col-span-12 sm:col-span-9'>
          <ListMovies />
        </div>
      </main>
    </PageWrapper>
  )
}

export default App

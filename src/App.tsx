import { PageWrapper } from '@/components/PageWrapper'
import { Filter } from '@/components/Filter'

function App() {
  return (
    <PageWrapper>
      <main className='container grid grid-cols-12 gap-9 mx-auto'>
        <div className='col-span-12 sm:col-span-3 md:col-span-4'>
          <Filter />
        </div>

        <div className='col-span-12 sm:col-span-9 md:col-span-8'>
          <h1>Hello World</h1>
        </div>
      </main>
    </PageWrapper>
  )
}

export default App

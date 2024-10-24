import { Header } from './Header'

export interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className='flex flex-col min-h-screen' style={{ backgroundImage: 'url(/bg.svg)' }}>
      <Header />
      <div className='py-10 px-4'>{children}</div>
    </div>
  )
}

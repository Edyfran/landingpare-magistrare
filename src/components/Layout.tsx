import { Outlet } from 'react-router-dom'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

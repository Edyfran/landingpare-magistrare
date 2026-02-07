import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-red-700 shadow-lg border-red-800 py-2'
          : 'bg-red-700 py-4',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-serif font-bold text-white tracking-tight">
            Magistrare
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className="text-sm font-medium text-red-100 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-red-100 hover:text-white hover:bg-red-800"
          >
            Área do Aluno
          </Button>
          <Button
            className="bg-white text-red-700 hover:bg-red-50 shadow-lg shadow-black/10 border-none font-semibold"
            onClick={() => handleNavClick('#planos')}
          >
            Matricule-se
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-red-800"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-red-700 p-2 rounded-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-serif font-bold text-red-700 tracking-tight">
                  Magistrare
                </span>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-lg font-medium hover:text-red-700 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-700 hover:bg-red-50"
                  >
                    Área do Aluno
                  </Button>
                  <Button
                    className="w-full bg-red-700 hover:bg-red-800 text-white"
                    onClick={() => handleNavClick('#planos')}
                  >
                    Matricule-se
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

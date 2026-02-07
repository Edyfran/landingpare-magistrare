import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export function Stats() {
  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'Sócio Senior, Mendes & Associados',
      text: 'A Juris Master revolucionou a forma como gerimos nossos processos. A economia de tempo é incomparável.',
      image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=10',
    },
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Advogada Criminalista',
      text: 'A precisão das pesquisas de jurisprudência me deu uma vantagem competitiva enorme no tribunal.',
      image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=22',
    },
    {
      name: 'Dr. Roberto Campos',
      role: 'Diretor Jurídico',
      text: 'A facilidade de uso e o suporte da equipe são excepcionais. Recomendo para todo departamento jurídico.',
      image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=33',
    },
  ]

  return (
    <section className="bg-slate-900 py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
              10k+
            </div>
            <div className="text-slate-400">Usuários Ativos</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
              500k+
            </div>
            <div className="text-slate-400">Processos Analisados</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
              98%
            </div>
            <div className="text-slate-400">Satisfação do Cliente</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif text-center mb-10">
            O que dizem nossos especialistas
          </h3>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/1">
                  <div className="p-1">
                    <Card className="bg-slate-800 border-slate-700 text-slate-100">
                      <CardContent className="flex flex-col items-center text-center p-8">
                        <Quote className="h-8 w-8 text-red-500 mb-6 opacity-50" />
                        <p className="text-lg md:text-xl italic mb-6 leading-relaxed">
                          "{t.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-12 h-12 rounded-full border-2 border-red-500"
                          />
                          <div className="text-left">
                            <p className="font-bold text-white">{t.name}</p>
                            <p className="text-sm text-slate-400">{t.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-slate-700 border-slate-600 hover:bg-red-700 hover:text-white" />
            <CarouselNext className="hidden md:flex bg-slate-700 border-slate-600 hover:bg-red-700 hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

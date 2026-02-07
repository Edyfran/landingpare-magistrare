import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

export function Stats() {
  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'Juiz de Direito',
      text: 'O nível de profundidade dos cursos da Magistrare é impressionante. Recomendo para todos que buscam atualização constante.',
      image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=10',
    },
    {
      name: 'Fernanda Oliveira',
      role: 'Aprovada OAB XXXVII',
      text: 'A metodologia focada e os simulados foram decisivos. Passei de primeira graças ao cronograma da plataforma.',
      image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=22',
    },
    {
      name: 'Roberto Campos',
      role: 'Mestrando em Dir. Constitucional',
      text: 'Excelente corpo docente. As aulas de Constitucional são as melhores que já assisti, didática impecável.',
      image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=33',
    },
  ]

  return (
    <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=texture%20dark&color=black')] opacity-10 mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24 border-b border-slate-800 pb-16">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500 font-serif">
              15k+
            </div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
              Alunos Ativos
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500 font-serif">
              120+
            </div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
              Cursos Disponíveis
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500 font-serif">
              2k+
            </div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
              Horas de Aula
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500 font-serif">
              92%
            </div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
              Aprovação OAB
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Quem estuda, recomenda
            </h3>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="currentColor" className="h-5 w-5" />
              ))}
            </div>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="bg-slate-800 border-slate-700 text-slate-100 h-full hover:border-red-500/50 transition-colors">
                      <CardContent className="flex flex-col p-8 h-full">
                        <Quote className="h-8 w-8 text-red-500 mb-6 opacity-50" />
                        <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
                          "{t.text}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-12 h-12 rounded-full border-2 border-red-500 object-cover"
                          />
                          <div className="text-left">
                            <p className="font-bold text-white text-sm">
                              {t.name}
                            </p>
                            <p className="text-xs text-red-400 font-medium">
                              {t.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-slate-700 border-slate-600 hover:bg-red-700 hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-slate-700 border-slate-600 hover:bg-red-700 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen } from 'lucide-react'

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium border border-red-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Novas turmas abertas para OAB 2025
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15]">
              Domine as Disciplinas do Direito com a{' '}
              <span className="text-primary">Magistrare</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              A plataforma de ensino definitiva para estudantes e profissionais.
              Cursos especializados, professores renomados e metodologia focada
              na sua aprovação e carreira jurídica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('#planos')}
                className="text-base h-14 px-8 shadow-xl shadow-red-700/20 hover:scale-105 transition-transform bg-red-700 hover:bg-red-800"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#diferenciais')}
                className="text-base h-14 px-8 hover:bg-red-50 hover:text-red-700 border-red-200 text-slate-700"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Conhecer Cursos
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-slate-200 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={`https://img.usecurling.com/ppl/thumbnail?gender=${i % 2 === 0 ? 'female' : 'male'}&seed=${i + 10}`}
                    alt="User"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-slate-900">+5.000 Alunos</p>
                <p className="text-xs">Certificados emitidos este mês</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none animate-fade-in delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="absolute top-0 w-full h-8 bg-slate-100 border-b flex items-center gap-2 px-4 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <img
                src="https://img.usecurling.com/p/1200/800?q=online%20law%20course%20platform%20interface&color=red"
                alt="Plataforma de Ensino Magistrare"
                className="w-full h-auto pt-8 scale-105 hover:scale-100 transition-transform duration-700"
              />

              {/* Overlay Content Mock */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                <p className="text-sm font-medium opacity-90">
                  Aula em andamento
                </p>
                <p className="text-lg font-bold">
                  Direito Constitucional: Direitos Fundamentais
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                    Cursos Disponíveis
                  </p>
                  <p className="font-bold text-2xl text-slate-900">+120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

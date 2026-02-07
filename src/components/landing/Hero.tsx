import { Button } from '@/components/ui/button'
import { ArrowRight, PlayCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-red-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              A revolução jurídica chegou
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Domine o Direito com a{' '}
              <span className="text-primary">Juris Master</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              A plataforma definitiva para advogados que buscam excelência.
              Automatize rotinas, gerencie processos com IA e tome decisões
              estratégicas baseadas em dados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base h-12 px-8 shadow-xl shadow-red-700/20 hover:scale-105 transition-transform"
              >
                Teste Grátis por 14 dias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-8 hover:bg-red-50 hover:text-red-700 border-red-200"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Ver Demonstração
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src={`https://img.usecurling.com/ppl/thumbnail?gender=male&seed=${i}`}
                    alt="User"
                  />
                ))}
              </div>
              <p>Junte-se a +10.000 advogados</p>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none animate-fade-in delay-200">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="absolute top-0 w-full h-8 bg-slate-100 border-b flex items-center gap-2 px-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <img
                src="https://img.usecurling.com/p/1200/800?q=legal%20dashboard%20software%20ui&color=red"
                alt="Plataforma Juris Master"
                className="w-full h-auto pt-8"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ArrowRight className="h-5 w-5 text-green-600 rotate-[-45deg]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Produtividade</p>
                  <p className="font-bold text-slate-900">+127%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

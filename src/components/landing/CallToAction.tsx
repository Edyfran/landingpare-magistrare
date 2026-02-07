import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  const handleClick = () => {
    toast({
      title: 'Inscrição iniciada!',
      description: 'Você está a um passo de transformar sua carreira.',
      duration: 3000,
    })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
          Pronto para ser um destaque no Direito?
        </h2>
        <p className="text-red-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Junte-se a mais de 15.000 alunos que estão construindo carreiras de
          sucesso com a metodologia Magistrare. Experimente 7 dias grátis.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            onClick={handleClick}
            className="bg-white text-red-900 hover:bg-slate-100 text-lg px-8 py-6 h-auto shadow-2xl hover:shadow-white/10 transition-all font-bold group"
          >
            Quero Começar Agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-red-400 text-white hover:bg-red-800 hover:text-white text-lg px-8 py-6 h-auto transition-all font-medium"
          >
            Falar com Consultor
          </Button>
        </div>
        <p className="mt-8 text-sm text-red-300 opacity-80">
          Não é necessário cartão de crédito para testar.
        </p>
      </div>
    </section>
  )
}

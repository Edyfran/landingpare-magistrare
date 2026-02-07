import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

export function CallToAction() {
  const handleClick = () => {
    toast({
      title: 'Vamos começar!',
      description: 'Você será redirecionado para o cadastro.',
      duration: 3000,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-r from-red-800 to-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          Pronto para elevar sua advocacia?
        </h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Junte-se a milhares de advogados que já estão transformando sua
          produtividade e resultados com a Magistrare.
        </p>
        <Button
          size="lg"
          onClick={handleClick}
          className="bg-white text-red-700 hover:bg-slate-100 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all font-bold"
        >
          Quero transformar minha produtividade
        </Button>
      </div>
    </section>
  )
}

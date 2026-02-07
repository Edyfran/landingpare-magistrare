import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/use-toast'

export function Pricing() {
  const handleSubscribe = () => {
    toast({
      title: 'Redirecionando...',
      description: 'Você está sendo levado para a área de matrícula.',
    })
  }

  const plans = [
    {
      name: 'Básico',
      description: 'Ideal para graduandos',
      price: 'R$ 49,90',
      period: '/mês',
      features: [
        'Acesso a 2 cursos por vez',
        'Certificado digital',
        'Material de apoio básico',
        'Acesso mobile',
      ],
      notIncluded: ['Mentoria mensal', 'Correção de peças', 'Download offline'],
      cta: 'Começar Agora',
      featured: false,
    },
    {
      name: 'Magistrare Pro',
      description: 'OAB e Concursos',
      price: 'R$ 99,90',
      period: '/mês',
      features: [
        'Cursos Ilimitados',
        'Trilhas para OAB e Concursos',
        'Simulados com IA',
        'Correção de 2 peças/mês',
        'Download para assistir offline',
        'Suporte prioritário',
      ],
      notIncluded: [],
      cta: 'Assinar Pro',
      featured: true,
    },
    {
      name: 'Vitalício',
      description: 'Pagamento único',
      price: 'R$ 1.997',
      period: '/único',
      features: [
        'Acesso vitalício à plataforma',
        'Todas as atualizações futuras',
        'Mentoria exclusiva trimestral',
        'Clube do Livro Jurídico',
        'Grupo VIP de Networking',
      ],
      notIncluded: [],
      cta: 'Garantir Vitalício',
      featured: false,
    },
  ]

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 text-red-700 border-red-200 bg-red-50"
          >
            Investimento
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Escolha o plano ideal para sua carreira
          </h2>
          <p className="text-muted-foreground text-lg">
            Sem fidelidade. Cancele quando quiser. Invista no seu futuro com a
            melhor relação custo-benefício do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative transition-all duration-300 hover:shadow-xl flex flex-col h-full',
                plan.featured
                  ? 'border-red-600 shadow-2xl scale-105 z-10 bg-white'
                  : 'border-slate-100 bg-slate-50/50',
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 text-sm uppercase tracking-wide font-bold shadow-lg">
                    Mais Escolhido
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pt-10 pb-2">
                <CardTitle className="text-xl font-bold text-slate-900 mb-1">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-slate-500 mb-6">
                  {plan.description}
                </p>
                <div className="flex justify-center items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div className="w-full h-px bg-slate-100 mb-6" />
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <div className="bg-green-100 rounded-full p-0.5 mt-0.5">
                        <Check className="h-3 w-3 text-green-600 shrink-0" />
                      </div>
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded &&
                    plan.notIncluded.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <div className="bg-slate-100 rounded-full p-0.5 mt-0.5">
                          <X className="h-3 w-3 text-slate-400 shrink-0" />
                        </div>
                        {feature}
                      </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 pb-8">
                <Button
                  className={cn(
                    'w-full h-12 text-base font-semibold transition-all',
                    plan.featured
                      ? 'bg-red-700 hover:bg-red-800 text-white shadow-lg hover:shadow-red-700/20'
                      : 'bg-white border-2 border-slate-200 hover:border-red-700 hover:text-red-700 text-slate-700',
                  )}
                  variant={plan.featured ? 'default' : 'outline'}
                  onClick={handleSubscribe}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

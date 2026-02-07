import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function Pricing() {
  const plans = [
    {
      name: 'Estudante',
      price: 'R$ 29,90',
      period: '/mês',
      features: [
        'Acesso básico à Jurisprudência',
        '5 Processos monitorados',
        'Modelos de peças simples',
      ],
      cta: 'Começar Grátis',
      featured: false,
    },
    {
      name: 'Profissional',
      price: 'R$ 89,90',
      period: '/mês',
      features: [
        'IA Avançada ilimitada',
        '50 Processos monitorados',
        'Gestão de clientes e prazos',
        'Suporte prioritário',
      ],
      cta: 'Assinar Profissional',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Sob Consulta',
      period: '',
      features: [
        'API Personalizada',
        'Processos ilimitados',
        'Gestor de conta dedicado',
        'Treinamento in-company',
      ],
      cta: 'Falar com Consultor',
      featured: false,
    },
  ]

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Planos sob medida para sua carreira
          </h2>
          <p className="text-muted-foreground">
            Escolha a melhor opção para o seu momento profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative transition-all duration-300 hover:shadow-xl',
                plan.featured
                  ? 'border-primary shadow-lg scale-105 z-10'
                  : 'border-slate-100',
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary hover:bg-primary/90 text-white px-4 py-1">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-lg font-medium text-muted-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
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

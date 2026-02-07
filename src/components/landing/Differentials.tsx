import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Scale, Gavel, FileText } from 'lucide-react'

export function Differentials() {
  const differentials = [
    {
      icon: Scale,
      title: 'Pesquisa Jurídica via IA',
      description:
        'Encontre jurisprudências e precedentes em segundos com nossa inteligência artificial avançada treinada em milhões de processos.',
    },
    {
      icon: Gavel,
      title: 'Atualizações em Tempo Real',
      description:
        'Monitore seus processos 24/7. Receba notificações instantâneas sobre qualquer movimentação nos tribunais de todo o país.',
    },
    {
      icon: FileText,
      title: 'Gestão de Casos Intuitiva',
      description:
        'Organize prazos, documentos e clientes em um único lugar com nossa interface drag-and-drop pensada para alta performance.',
    },
  ]

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Por que escolher a Magistrare?
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologia desenvolvida por advogados para advogados, focada em
            resolver os gargalos reais da profissão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-slate-100"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

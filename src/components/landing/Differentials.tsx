import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, BookMarked, UserCheck } from 'lucide-react'

export function Differentials() {
  const differentials = [
    {
      icon: UserCheck,
      title: 'Professores Especialistas',
      description:
        'Aprenda com quem faz o Direito acontecer. Nossos docentes são juízes, promotores e advogados renomados com ampla experiência prática e acadêmica.',
    },
    {
      icon: BookMarked,
      title: 'Conteúdo Atualizado',
      description:
        'Material didático revisado semanalmente para acompanhar as constantes mudanças legislativas e as jurisprudências mais recentes dos tribunais superiores.',
    },
    {
      icon: GraduationCap,
      title: 'Metodologia Focada',
      description:
        'Aulas estruturadas para maximizar seu aprendizado em menos tempo. Foco total no que realmente cai nas provas da OAB e concursos, e no que é essencial para a prática.',
    },
  ]

  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Por que estudar com a Magistrare?
          </h2>
          <p className="text-muted-foreground text-lg">
            Somos especialistas em ensino jurídico de alta performance, unindo
            tradição e tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-slate-100 bg-slate-50/50"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-red-700 group-hover:border-red-700 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-red-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
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

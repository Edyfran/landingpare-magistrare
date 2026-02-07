import { Check, Target, Trophy, Users } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: 'Foco na Aprovação',
      description: 'Cronogramas personalizados para OAB e Concursos.',
    },
    {
      icon: Trophy,
      title: 'Certificação Válida',
      description: 'Certificados aceitos em todo território nacional.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Comunidade exclusiva de alunos e professores.',
    },
  ]

  return (
    <section
      id="beneficios"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 skew-x-12 translate-x-20 hidden lg:block" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-800 font-semibold text-sm">
              Carreira Jurídica
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Resultados reais para o seu futuro profissional
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Não entregamos apenas aulas, entregamos transformação. Seja para
              passar na prova da ordem, conquistar um cargo público ou se
              especializar para o mercado privado.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                'Acesso ilimitado a mais de 2.000 horas de conteúdo',
                'Material de apoio em PDF para download',
                'Simulados com correção via Inteligência Artificial',
                'Mentoria mensal com grandes nomes do Direito',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-green-700" />
                  </div>
                  <span className="font-medium text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {benefits.map((b, i) => (
                <div key={i} className="space-y-2">
                  <b.icon className="h-8 w-8 text-red-700" />
                  <h4 className="font-bold text-slate-900">{b.title}</h4>
                  <p className="text-sm text-slate-500 leading-snug">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://img.usecurling.com/p/800/1000?q=law%20student%20studying%20library&color=red"
                alt="Estudante de Direito"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-serif italic text-xl mb-2">
                    "A Magistrare foi fundamental para minha aprovação na OAB."
                  </p>
                  <p className="font-bold text-red-200">
                    — Julia Santos, Advogada Jr.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-dots-pattern opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-red-200 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

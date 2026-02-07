import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'Os cursos possuem certificado?',
      answer:
        'Sim, todos os nossos cursos oferecem certificado de conclusão com carga horária, válido como atividade complementar em faculdades e para comprovação curricular.',
    },
    {
      question: 'Como funciona o acesso às aulas?',
      answer:
        'O acesso é 100% online e on-demand. Você pode assistir às aulas quando e onde quiser, através do computador, tablet ou celular, pelo período de duração do seu plano.',
    },
    {
      question: 'O conteúdo é atualizado?',
      answer:
        'Absolutamente. O Direito é dinâmico, e nossa equipe pedagógica garante que todas as aulas e materiais estejam em conformidade com as leis e jurisprudências mais recentes.',
    },
    {
      question: 'Posso tirar dúvidas com os professores?',
      answer:
        'Sim! Alunos dos planos Profissional e Ilimitado têm acesso a um canal direto para envio de dúvidas, que são respondidas pela nossa equipe de monitores e professores.',
    },
    {
      question: 'Existe garantia de satisfação?',
      answer:
        'Oferecemos garantia incondicional de 7 dias. Se você não gostar da metodologia ou do conteúdo, devolvemos 100% do seu investimento.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre a plataforma Magistrare.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-xl shadow-sm border border-slate-100 px-6 py-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-slate-100 last:border-0"
            >
              <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-red-700 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

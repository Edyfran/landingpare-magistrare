import { Check } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Resultados reais para o seu dia a dia
            </h2>
            <p className="text-lg text-muted-foreground">
              Elimine tarefas repetitivas e foque no que realmente importa: a
              defesa do seu cliente.
            </p>

            <ul className="space-y-4">
              {[
                'Economia de até 20h semanais em tarefas administrativas',
                'Segurança jurídica com alertas antecipados de prazos',
                'Aumento de produtividade e faturamento do escritório',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-700" />
                  </div>
                  <span className="font-medium text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Como a IA ajuda na pesquisa?
                </AccordionTrigger>
                <AccordionContent>
                  Nossa IA analisa o contexto do seu caso e sugere
                  jurisprudências com 98% de relevância, economizando horas de
                  pesquisa manual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  É seguro armazenar meus dados?
                </AccordionTrigger>
                <AccordionContent>
                  Utilizamos criptografia de ponta a ponta e servidores
                  certificados, garantindo total confidencialidade e segurança
                  para seus processos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Consigo acessar pelo celular?
                </AccordionTrigger>
                <AccordionContent>
                  Sim! Nossa plataforma é 100% responsiva e possui app dedicado
                  para você acompanhar seus processos de onde estiver.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-red-100 rounded-2xl transform rotate-3 scale-95" />
            <img
              src="https://img.usecurling.com/p/600/700?q=lawyer%20using%20tablet%20modern%20office&color=red"
              alt="Advogado utilizando tablet"
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

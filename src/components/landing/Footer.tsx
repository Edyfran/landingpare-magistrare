import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Scale,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
} from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Inscrição realizada!',
      description: 'Você receberá novidades e conteúdos jurídicos exclusivos.',
    })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">
                Magistrare
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A maior plataforma de educação jurídica do país. Democratizando o
              acesso ao conhecimento de alta qualidade para estudantes e
              advogados.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Cursos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Preparatório OAB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Carreiras Jurídicas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Pós-Graduação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Cursos de Extensão
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Mentoria Prática
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Sobre a Magistrare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Corpo Docente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Blog Jurídico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-white">Fique Atualizado</h3>
            <p className="text-sm text-slate-400">
              Receba resumos de jurisprudência e notícias semanais.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                placeholder="Seu melhor e-mail"
                required
                type="email"
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-red-600 focus-visible:border-red-600"
              />
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-medium"
              >
                Inscrever-se na Newsletter
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 2024 Magistrare Educacional S.A. Todos os direitos reservados.
            CNPJ: 00.000.000/0001-00
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>Av. Paulista, 1000 - SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>contato@magistrare.com.br</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Scale, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Inscrição realizada!',
      description: 'Obrigado por assinar nossa newsletter.',
    })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Magistrare
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transformando a advocacia com tecnologia de ponta e inteligência
              artificial para resultados extraordinários.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-red-400">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Imprensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-red-400">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-50">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                placeholder="Seu e-mail profissional"
                required
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-red-500"
              />
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white"
              >
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Magistrare. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

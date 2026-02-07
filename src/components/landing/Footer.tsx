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
    <footer className="bg-slate-50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-xl font-serif font-bold">Juris Master</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando a advocacia com tecnologia de ponta e inteligência
              artificial para resultados extraordinários.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Imprensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input placeholder="Seu e-mail profissional" required />
              <Button type="submit" className="w-full">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Juris Master. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

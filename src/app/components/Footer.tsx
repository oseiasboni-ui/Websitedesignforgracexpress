import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl">GracExpress</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Líder em soluções logísticas com tecnologia de ponta e
              compromisso com a excelência.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg">Empresa</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Sobre Nós
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Serviços
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Infraestrutura
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Contato
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>contato@gracexpress.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 GracExpress. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

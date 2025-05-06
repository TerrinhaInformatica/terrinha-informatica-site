import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      <header className="flex flex-col items-center text-center space-y-4">
        <img src="/logo.jpg" alt="Logo Terrinha Informática" className="w-72" />
        <h1 className="text-3xl font-bold text-blue-600">Terrinha Informática</h1>
        <p className="text-lg text-gray-700">
          Manutenção de computadores e impressoras, venda de acessórios e peças.
        </p>
        <p className="text-md text-gray-500">
          Av. Moreira Paz 678, Sala A - WhatsApp: (54) 3231-3932
        </p>
        <a
          href="https://www.instagram.com/terrinha.informatica"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline"
        >
          <Instagram className="mr-2" /> @terrinha.informatica
        </a>
      </header>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Serviços</h2>
          <ul className="list-disc pl-4 text-gray-700">
            <li>Manutenção de computadores</li>
            <li>Conserto de impressoras</li>
            <li>Formatação e instalação de software</li>
            <li>Limpeza e otimização</li>
          </ul>
        </div>

        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Produtos</h2>
          <ul className="list-disc pl-4 text-gray-700">
            <li>Teclados, mouses e webcams</li>
            <li>HDs, SSDs e memórias</li>
            <li>Fontes, placas-mãe e processadores</li>
            <li>Cartuchos e toners</li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-6">
        © {new Date().getFullYear()} Terrinha Informática. Todos os direitos reservados.
      </footer>
    </div>
  );
}

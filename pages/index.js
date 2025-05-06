import { Phone, MapPin, Mail, Instagram, Monitor, Printer, HardDrive, ShoppingCart, MessageCircle } from "lucide-react";

const produtos = [
  { nome: "Teclado Gamer", img: "/produtos/teclado.jpg" },
  { nome: "Mouse Óptico", img: "/produtos/mouse.jpg" },
  { nome: "Webcam HD", img: "/produtos/webcam.jpg" },
  { nome: "Memória RAM 8GB", img: "/produtos/ram.jpg" }
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Cabeçalho */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-4">
          <img src="/logo.jpg" alt="Logo" className="w-20 rounded" />
          <h1 className="text-2xl font-bold">Terrinha Informática</h1>
        </div>
        <div className="text-sm">
          <p className="flex items-center"><Phone className="mr-2" size={16} /> (54) 3231-3932</p>
          <p className="flex items-center"><Mail className="mr-2" size={16} /> terrinha32313932@gmail.com</p>
          <p className="flex items-center"><MapPin className="mr-2" size={16} /> Av. Moreira Paz 678, Sala A</p>
          <a href="https://www.instagram.com/terrinha.informatica" target="_blank" className="flex items-center hover:underline">
            <Instagram className="mr-2" size={16} /> @terrinha.informatica
          </a>
        </div>
      </header>

      {/* Serviços */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Nossos Serviços</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div><Monitor className="mx-auto mb-2" size={40} /><p>Manutenção de PCs</p></div>
          <div><Printer className="mx-auto mb-2" size={40} /><p>Conserto de Impressoras</p></div>
          <div><HardDrive className="mx-auto mb-2" size={40} /><p>Formatação & Software</p></div>
          <div><MessageCircle className="mx-auto mb-2" size={40} /><p>Otimização & Limpeza</p></div>
        </div>
      </section>

      {/* Produtos */}
      <section className="bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Produtos em Destaque</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {produtos.map((p, i) => (
            <div key={i} className="bg-white p-4 rounded shadow text-center">
              <img src={p.img} alt={p.nome} className="w-full h-32 object-contain mb-2" />
              <p>{p.nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-blue-700 text-white text-center text-sm p-4 mt-6">
        <p>© {new Date().getFullYear()} Terrinha Informática</p>
        <p>Av. Moreira Paz 678, Sala A — WhatsApp: (54) 3231-3932</p>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/554432313932"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
}

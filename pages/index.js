import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen text-green-900">
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <Image src="/Imagem1.png" alt="Logo SECAF" width={100} height={50} />
        <nav className="space-x-4">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#servicos" className="hover:underline">Serviços</a>
          <a href="#projetos" className="hover:underline">Projetos</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      <main className="p-6 space-y-12">
        <section id="sobre" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Sobre a SECAF</h2>
          <p>
            Fundada por três engenheiros agrônomos da UFGD, a SECAF nasceu com o objetivo de fortalecer a agricultura familiar
            através de soluções técnicas eficientes, acessíveis e sustentáveis. Atuamos em projetos de irrigação, crédito fundiário,
            seguros agrícolas, assistência técnica, laudos periciais, vistorias, recuperação de solos e muito mais.
          </p>
        </section>

        <section id="servicos" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Serviços</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consultoria para crédito fundiário (PNCF)</li>
            <li>Projetos de irrigação e uso eficiente da água</li>
            <li>Vistorias e laudos periciais agrícolas</li>
            <li>Elaboração de projetos técnicos para prefeituras</li>
            <li>Recuperação de áreas degradadas e mananciais</li>
            <li>Piqueteamento, análise e correção de solo</li>
          </ul>
        </section>

        <section id="projetos" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Projetos em Destaque</h2>
          <p>Veja alguns dos projetos realizados pela SECAF junto a associações, prefeituras e pequenos produtores, sempre com foco na sustentabilidade e eficiência produtiva.</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Implantação de sistema de irrigação por aspersão em propriedades familiares</li>
            <li>Projetos de crédito fundiário com regularização ambiental</li>
            <li>Laudos de vistoria para seguros agrícolas em parceria com instituições financeiras</li>
          </ul>
        </section>

        <section id="contato" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Contato</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Nome" className="p-2 rounded border" />
            <input type="email" placeholder="Email" className="p-2 rounded border" />
            <textarea placeholder="Mensagem" className="p-2 rounded border h-32" />
            <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="bg-white text-center py-4 mt-12">
        <p>&copy; {new Date().getFullYear()} SECAF - Consultoria e Assessoria para Agricultura Familiar</p>
      </footer>
    </div>
  );
}

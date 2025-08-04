import Link from 'next/link';

export default function Sucesso() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <div className="flex flex-col w-full max-w-2xl mx-auto">
        <h1 className="text-2xl px-4 font-bold text-yellow-400 mb-4">
          🎉 Formulário enviado com sucesso!
        </h1>
        <p className="text-lg px-4 mt-6">
          Logo entraremos em contato para organizar o aniversário mais animado dos 7 mares!
        </p>

        {/* Botão de voltar */}
        <Link
          href="/"
          className="mt-10 bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300 mx-auto w-fit"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}


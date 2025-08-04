"use client"
import { event as gtagEvent } from "@/lib/gtag";
import Link from 'next/link';

const Venda = () => {

  const handleClick = () => {
    gtagEvent({
      action: "purchase_button_click",
      category: "CTA",
      label: "Dinner Pirata Porto Alegre",
      value: 128,
    });
  };

  return (
  <div
    id="venda"
    className="relative w-full min-h-[100vh] snap-start overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: "url('/backgrounds/background3.jpg')" }}
  >
    <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100vh] py-10 px-4 text-center text-white bg-black bg-opacity-70">

      <h1 className="text-lg lg:text-2xl font-bold py-6">GARANTA AGORA SUA EXPERIÊNCIA</h1>

      <h3 className="font-bold text-lg lg:text-xl mb-2">Aberto de terça a domingo</h3>
      <h4 className="text-base italic text-gray-200">Classificação livre</h4>

      {/* Pacote Básico Destaque */}
      <h2 className="text-lg lg:text-xl mt-6 font-extrabold uppercase tracking-wide text-yellow-400 drop-shadow-md mb-6">
        Pacote Básico de aniversário com espaço incluso
      </h2>

      {/* Valores */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-2 text-left text-white">
        {/* Adulto */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg w-[280px]">
          <div className="flex flex-col ml-10">
            <h3 className="text-xl font-bold mb-2 text-yellow-300">Adultos</h3>
            <p className="text-4xl font-extrabold text-white">R$ 148,00</p>
            <p className="italic text-sm mt-2">por pessoa</p>
          </div>
        </div>

        {/* Criança */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg w-[280px]">
          <div className="flex flex-col ml-10">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Crianças</h3>
            <p className="text-4xl font-extrabold text-white">R$ 98,00</p>
            <p className="italic text-sm mt-2">por criança</p>
          </div>
        </div>
      </div>

      <p className="text-xs italic mt-8 px-8">Valores podem ser parcelados em até 3x no cartão de crédito</p>

    </div>
  </div>
);
};

export default Venda;


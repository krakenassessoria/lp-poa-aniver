"use client"

import { useState } from "react";
import { event as gtagEvent } from "@/lib/gtag";

const Venda = () => {
  const [hasTrackedPricing, setHasTrackedPricing] = useState(false);

  const handleClick = () => {
    if (hasTrackedPricing) {
      return;
    }

    gtagEvent({
      action: "view_pricing",
      funnelStep: "pricing_view",
      label: "Pacotes Salao Perola Porto Alegre",
      value: 1,
    });

    setHasTrackedPricing(true);
  };

  return (
    <div
      id="venda"
      className="relative w-full min-h-[100vh] snap-start overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/background3.jpg')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100vh] py-10 px-4 text-center text-white bg-black bg-opacity-70">
        <h1 className="text-lg lg:text-2xl font-bold py-6">PACOTES DE ANIVERSÁRIO</h1>

        <h2 className="text-lg lg:text-xl mt-6 font-extrabold uppercase tracking-wide text-yellow-400 drop-shadow-md mb-6">
          Salão Pérola com taxa de serviço inclusa
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-2 text-left text-white" onMouseEnter={handleClick}>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg w-[280px]">
            <h3 className="text-xl font-bold mb-2 text-yellow-300">Até 30 pessoas</h3>
            <p className="text-3xl font-extrabold text-white">R$ 4.500,00</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg w-[280px]">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Até 40 pessoas</h3>
            <p className="text-3xl font-extrabold text-white">R$ 6.000,00</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg w-[280px]">
            <h3 className="text-xl font-bold mb-2 text-emerald-300">Até 50 pessoas</h3>
            <p className="text-3xl font-extrabold text-white">R$ 7.500,00</p>
          </div>
        </div>

        <p className="text-xs italic mt-8 px-8">Espaço com capacidade para até 80 pessoas sentadas</p>
      </div>
    </div>
  );
};

export default Venda;

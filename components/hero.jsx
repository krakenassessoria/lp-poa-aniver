"use client"
import { sendGTMEvent } from '@next/third-parties/google';
import Image from 'next/image';

const Hero = () => {

  const evento1 = ()=> {
    document.getElementById('saiba').scrollIntoView({ behavior: 'smooth' })
    sendGTMEvent({
      event: 'buttonClicked',
      category: 'Button',
      label: 'reserva',
      value: "reserva"
    })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={(e) => e.currentTarget.play()}
      >
        <source src="/porto.mp4" type="video/mp4" />
        Seu navegador não suporta este elemento de vídeo.
      </video>
      <div className="relative z-10 flex flex-col pt-20 pb-36 md:pb-20 justify-between w-full h-full text-center text-white bg-black bg-opacity-55">
        <div>
          <h1 className="flex w-full justify-center">
              <Image priority src="/logo_cm.png" alt="Navio Cara de Mau" width={120} height={120} />
          </h1>
          <div className='flex flex-col mt-5'>
              <p className="text-3xl lg:text-5xl px-2" style={{ fontFamily: 'Riley' }}>
                Cara de Mau Porto Alegre
              </p>
              <p className="text-xl pt-20 lg:pt-28 px-6 font-bold">
                Seu aniversário no Salão Pérola com experiência pirata inesquecível
              </p>
              <p className="text-lg pt-6 px-6 font-extralight">
                Espaço para até 80 pessoas sentadas, pizza à vontade, água e refrigerante inclusos
              </p>
          </div>
        </div>
        <div className="py-6">
            <button onClick={evento1} target="_blank"  className="mt-6 bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-900 transition duration-300">
              Saiba mais
            </button>
        </div>
        <span className='relative z-10 text-sm mt-5 px-10'>Pacotes para até 30, 40 ou 50 pessoas (taxa de serviço inclusa)</span>
      </div>
    </div>
  );
};

export default Hero;

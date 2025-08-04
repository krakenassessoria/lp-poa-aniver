"use client"
import { sendGTMEvent } from '@next/third-parties/google';
import Image from 'next/image';

const Hero = () => {

  const evento1 = ()=> {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' })
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
              <p className="text-xl pt-10 px-4 font-bold">
              Comemore seu aniversário na pizzaria mais famosa do Brasil!
              </p>
              <p className="text-lg pt-6 px-3 font-extralight">
                Espaço temático exclusivo com animadores e pizzas e bebidas a vontade
              </p>
          </div>
        </div>
        <div className="py-10">
            <button onClick={evento1} target="_blank"  className="mt-6 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
              Reserve agora
            </button>
        </div>
        <span className='relative z-10 text-sm mt-5 px-2'>Horários e datas sob reserva</span>
      </div>
    </div>
  );
};

export default Hero;

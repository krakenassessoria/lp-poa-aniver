"use client"
import { event as gtagEvent } from '../lib/gtag';
import Image from 'next/image';

const Hero = () => {

  const evento1 = ()=> {
    document.getElementById('saiba').scrollIntoView({ behavior: 'smooth' })
    gtagEvent({
      action: 'view_offer_details',
      funnelStep: 'details_view',
      label: 'Boulevard aniversario hero'
    })
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/80 md:from-black/20 md:via-black/35 md:to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.25),rgba(0,0,0,0)_35%)] md:bg-[radial-gradient(circle_at_20%_35%,rgba(14,165,233,0.2),rgba(0,0,0,0)_40%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/70 to-transparent md:h-36 md:from-black/45" />

      <div className="relative z-10 min-h-screen text-white">
        <div className="hidden md:flex min-h-screen items-center justify-center px-10 lg:px-16">
          <div className="w-full max-w-4xl rounded-3xl border border-white/25 bg-slate-950/45 p-10 text-center shadow-[0_18px_70px_rgba(2,6,23,0.65)] backdrop-blur-md">
            <Image priority src="/logo_cm.png" alt="Navio Cara de Mau" width={96} height={96} className="mx-auto" />

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Salão Pérola • Porto Alegre
            </p>

            <p className="mt-5 text-6xl leading-none" style={{ fontFamily: 'Riley' }}>
              Cara de Mau
            </p>
            <p className="mt-4 text-3xl font-semibold text-slate-100">
              Aniversário pirata para sua tripulação
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-100">
              Espaço para até 80 pessoas sentadas, pizza à vontade, água e refrigerante inclusos.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-4 py-1 text-cyan-100">Até 80 lugares</span>
              <span className="rounded-full border border-white/35 bg-black/25 px-4 py-1">Até 4h de permanência</span>
              <span className="rounded-full border border-white/35 bg-black/25 px-4 py-1">8 sabores salgados + 4 doces</span>
            </div>

            <div className="mt-9 flex flex-col items-center gap-3">
              <button onClick={evento1} className="rounded-lg bg-cyan-400 px-10 py-3 text-base font-bold text-slate-950 transition hover:bg-cyan-300">
                Ver pacotes
              </button>
              <p className="text-sm text-slate-200">Pacotes para até 30, 40 ou 50 pessoas (taxa de serviço inclusa)</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-screen flex-col justify-between px-4 pb-6 pt-10 md:hidden">
          <div className="mx-auto w-fit rounded-2xl border border-white/20 bg-slate-950/25 px-6 pb-3 pt-4 text-center shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 -z-10 rounded-full bg-cyan-300/20 blur-xl" />
              <Image priority src="/logo_cm.png" alt="Navio Cara de Mau" width={104} height={104} className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]" />
            </div>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-100 [text-shadow:0_1px_6px_rgba(0,0,0,0.65)]">
              Salão Pérola • Porto Alegre
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-slate-950/60 p-5 text-center shadow-[0_18px_40px_rgba(2,6,23,0.55)] backdrop-blur-md">
            <p className="text-3xl leading-tight" style={{ fontFamily: 'Riley' }}>
              Cara de Mau Porto Alegre
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug">
              Seu aniversário com experiência pirata inesquecível
            </p>
            <p className="mt-3 text-base text-slate-100">
              Até 80 pessoas sentadas, pizza à vontade, água e refrigerante inclusos.
            </p>

            <button onClick={evento1} className="mt-6 w-full rounded-lg bg-cyan-400 py-3 text-base font-bold text-slate-950 transition hover:bg-cyan-300">
              Ver pacotes e condições
            </button>

            <p className="mt-4 text-xs text-slate-200">
              Pacotes para até 30, 40 ou 50 pessoas (taxa de serviço inclusa)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

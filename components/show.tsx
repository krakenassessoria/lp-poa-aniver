"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Definir o tipo para os dias da semana
type Day =
  | "domingo"
  | "segunda"
  | "terça"
  | "quarta"
  | "quinta"
  | "sexta"
  | "sábado";

// Tipo para o agendamento de shows
type Schedule = Record<Day, { navio: string }>;

// Agendamento dos shows
const schedule: Schedule = {
  segunda: { navio: "A Chegada do Capitão" },
  terça: { navio: "A Tripulação" },
  quarta: { navio: "A Chegada do Capitão" },
  quinta: { navio: "O Segredo entre a Terra e o Mar" },
  sexta: { navio: "Noite Flashback" },
  sábado: { navio: "Balada Pirata" },
  domingo: { navio: "Noite Flashback" },
};

// Mapeamento dos cartazes
const posters: Record<string, string> = {
  "A Tripulação": "/shows/tripulacao.png",
  "A Chegada do Capitão": "/shows/chegada.png",
  "A Batalha": "/shows/batalha.png",
  "Noite Flashback": "/shows/flashback.png",
  "Balada Pirata": "/shows/balada.png",
  "O Segredo entre a Terra e o Mar": "/shows/segredo.png"
};

// Mapeamento de vídeos para cada show
const videos: Record<string, string> = {
  "A Tripulação": "/shows/tripulacao.mp4",
  "A Chegada do Capitão": "/shows/chegada.mp4",
  "A Batalha": "/shows/batalha.mp4",
  "Balada Pirata": "/shows/balada.mp4",
  "Noite Flashback": "/shows/flashback.mp4",
  "O Segredo entre a Terra e o Mar": "/shows/segredo.mp4",
  "Nenhum show": "",
};

const getDayName = (offset = 0): Day => {
  const days: Day[] = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const today = new Date();
  today.setDate(today.getDate() + offset);
  return days[today.getDay()];
};

const Show = () => {
  const [currentDayOffset, setCurrentDayOffset] = useState(0);
  const [currentDay, setCurrentDay] = useState<Day>(getDayName());
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const updatedDay = getDayName(currentDayOffset);
    setCurrentDay(updatedDay);
  }, [currentDayOffset]);

  const showNavio = schedule[currentDay]?.navio || "Nenhum show";
  const posterSrc = posters[showNavio] || "/shows/default.jpg";
  const videoSrc = videos[showNavio] || "";

  return (
    <div
      className="flex flex-col w-full min-h-[100vh] items-center justify-center py-16 bg-cover bg-center text-white px-4"
      style={{ backgroundImage: "url('/backgrounds/tabua.jpg')" }}
    >
      {/* Título principal */}
      <h1 className="text-3xl font-bold mb-6 py-2 bg-black/50 p-2" style={{ fontFamily: 'Riley' }}>SHOW EM CARTAZ</h1>

      {/* Controles e dia da semana */}
      <div className="flex items-center justify-center text-xl mb-6">
        {/* Botão Anterior */}
        <button
          onClick={() => setCurrentDayOffset((prev) => prev - 1)}
          className="px-4 py-2 bg-black/50 text-white rounded-full shadow mx-4"
        >
          &lt;
        </button>

        {/* Dia da semana ou "Hoje" */}
        <span className="w-40 text-center text-4xl font font-extralight shadow" style={{ fontFamily: 'Riley' }}>
          {currentDayOffset === 0
            ? "Hoje"
            : `${currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}s`}
        </span>

        {/* Botão Próximo */}
        <button
          onClick={() => setCurrentDayOffset((prev) => prev + 1)}
          className="px-4 py-2 bg-black/50 text-white rounded-full shadow mx-4"
        >
          &gt;
        </button>
      </div>

      {/* Cartaz do show */}
      <div className="p-1 shadow-lg">
        <Image
          src={posterSrc}
          alt={showNavio}
          width={270}
          height={448}
          className="shadow-md"
        />
      </div>

      {/* Botão para abrir o vídeo */}
      <button
        onClick={() => setIsVideoOpen(true)}
        className="py-1 text-2xl bg-black/30 hover:bg-amber-950/50 p-2"
        style={{ fontFamily: 'Riley' }}
      >
        Saiba mais sobre o show
      </button>

      {/* Modal do vídeo */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4">
          <div className="relative w-full max-w-[500px] lg:max-w-[400px] p-6 bg-gray-900 rounded-lg shadow-lg">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white text-xl z-50"
            >
              ✖
            </button>
            {videoSrc ? (
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
                style={{ aspectRatio: "9/16" }}
              />
            ) : (
              <p className="text-center text-white">Vídeo não disponível para este show.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;

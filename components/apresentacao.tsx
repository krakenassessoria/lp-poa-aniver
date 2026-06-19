import Image from "next/image"

const Apresentacao = () => {
  return (
    <div className="flex w-full min-h-screen items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/salao-perola.jpg')" }}>
      <div className="z-10 flex flex-col w-full items-center justify-center min-h-[100vh] py-10 text-white bg-black bg-opacity-70">
        <div className="flex w-full justify-center py-4">
            <Image priority src={"/logo-horizontal.png"} alt="Cara de Mau" width={200} height={75} className="py-2" />
        </div>

        <div className="flex flex-col w-full justify-center my-10 px-10 text-base lg:text-lg lg:max-w-xl mx-auto text-justify space-y-4">
          <p>
            No <b className="font-bold">Cara de Mau Porto Alegre</b>, o <b className="font-bold">Salão Pérola</b> é um ambiente temático no 2º andar para celebrar seu aniversário com toda a sua tripulação.
          </p>

          <p>
            O salão recebe até <b className="font-bold">120 pessoas sentadas</b>, com decoração tema fundo do mar com projeção, bolo decorativo para fotos e atendimento com garçons piratas.
          </p>

          <p>
            Você aproveita <b className="font-bold">pizza à vontade</b>, água e refrigerante inclusos, além de sistema de som para usar sua playlist.
          </p>

          <p>
            <b className="font-bold">Uma festa completa, temática e divertida</b>, do jeito que um aniversário pirata merece.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Apresentacao

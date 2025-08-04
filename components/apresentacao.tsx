import Image from "next/image"

//Ander Silva

const Apresentacao = () => {
  return (
    <div className="flex w-full min-h-screen items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/salao-perola.jpg')" }}>
      <div className="z-10 flex flex-col w-full items-center justify-center min-h-[100vh] py-10 text-white bg-black bg-opacity-70">
        <div className="flex w-full justify-center py-4">
            <Image priority src={"/logo-horizontal.png"} alt="Cara de Mau" width={200} height={75} className="py-2" />
        </div>

        <div className="flex flex-col w-full justify-center my-10 px-10 text-base lg:text-lg lg:max-w-xl mx-auto text-justify space-y-4">
         <p>
  No <b className="font-bold">Cara de Mau Porto Alegre</b>, contamos com o <b className="font-bold">Salão Pérola</b> – um ambiente temático e encantador, perfeito para transformar aniversários em momentos inesquecíveis.
</p>

<p>
  O espaço é totalmente <b className="font-bold">tematizado com projeções do fundo do mar</b>, som ambiente com suas playlists do Spotify preferidas e toda a estrutura necessária para receber seus convidados com conforto e diversão.
</p>

<p>
  Além de <b className="font-bold">pizzas e bebidas à vontade</b>, o serviço conta com o atendimento dos piratas mais animados dos sete mares!
</p>

<p>
  <b className="font-bold">Viva uma experiência única, divertida e deliciosa</b> – porque aqui, a festa vira uma verdadeira aventura!
</p>

        </div>
      </div>
    </div>
  )
}

export default Apresentacao
import Carrousel from './carrousel'

const images = [
  {
    original: '/galeria/experiencia/porto1.jpg',
    thumbnail: '/galeria/experiencia/porto1.jpg',
  },
  {
    original: '/galeria/experiencia/porto2.jpg',
    thumbnail: '/galeria/experiencia/porto2.jpg',
  },
  {
    original: '/galeria/experiencia/porto3.jpg',
    thumbnail: '/galeria/experiencia/porto3.jpg',
  },
  {
    original: '/galeria/experiencia/porto4.jpg',
    thumbnail: '/galeria/experiencia/porto4.jpg',
  },
  {
    original: '/galeria/experiencia/porto5.jpg',
    thumbnail: '/galeria/experiencia/porto5.jpg',
  },
  {
    original: '/galeria/experiencia/porto6.jpg',
    thumbnail: '/galeria/experiencia/porto6.jpg',
  }
];

const GaleriaShow = () => {
  return (
    <div className="relative flex w-full min-h-[100vh] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/galeria.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center text-white bg-black bg-opacity-70">
        <Carrousel images={images} titulo={"A Experiência"} top={"pt-1 lg:pt-4"} largura={"max-w-[90vw] lg:max-w-[20vw]"} />
      </div>
    </div>
  )
}

export default GaleriaShow;

import Carrousel from './carrousel'

const images = [
  {
    original: '/galeria/ambiente/poa1.jpg',
    thumbnail: '/galeria/ambiente/poa1.jpg',
  },
  {
    original: '/galeria/ambiente/poa2.jpg',
    thumbnail: '/galeria/ambiente/poa2.jpg',
  },
  {
    original: '/galeria/ambiente/poa3.jpg',
    thumbnail: '/galeria/ambiente/poa3.jpg',
  },
  {
    original: '/galeria/ambiente/poa4.jpg',
    thumbnail: '/galeria/ambiente/poa4.jpg',
  },
  {
    original: '/galeria/ambiente/poa5.jpg',
    thumbnail: '/galeria/ambiente/poa5.jpg',
  },
  {
    original: '/galeria/ambiente/poa6.jpg',
    thumbnail: '/galeria/ambiente/poa6.jpg',
  },
  {
    original: '/galeria/ambiente/poa7.jpg',
    thumbnail: '/galeria/ambiente/poa7.jpg',
  },
];

const imagesMobile = [
  {
    original: '/galeria/ambiente/mobile/poa1.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa1.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa2.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa2.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa3.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa3.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa4.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa4.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa5.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa5.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa6.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa6.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa7.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa7.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa8.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa8.jpg',
  },
  {
    original: '/galeria/ambiente/mobile/poa9.jpg',
    thumbnail: '/galeria/ambiente/mobile/poa9.jpg',
  }
];

const Galeria = () => {
  return (
    <>
    <div className="hidden lg:block relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('backgrounds/background5.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-70">
        <Carrousel images={images} titulo={"Nosso ambiente"} top={"pt-1"} largura={"max-w-[100vw] lg:max-w-[43vw]"} />
      </div>
    </div>
    <div className="lg:hidden relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('backgrounds/background5-mobile.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-70">
        <Carrousel images={imagesMobile} titulo={"Nosso ambiente"} top={"pt-1"} largura={"max-w-[90vw] lg:max-w-[43vw]"} />
      </div>
    </div>
    </>
  )
}

export default Galeria;

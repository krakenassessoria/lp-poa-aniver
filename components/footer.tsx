import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-black text-white pb-20 pt-10">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold">Fale conosco</h1>
          <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
              <FaWhatsapp />
              <p className="text-sm"><Link href={"https://wa.me/5554993712057"} target='_blank'>{"(54) 99371-2057"}</Link></p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <p className="text-sm w-full">Av. dos Estados, 111 - Porto Alegre/RS</p>
            </div>
            <p className="text-sm w-full">Dentro do Boulevard Laçador, ao lado do aeroporto Salgado Filho.</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
        <div>
          <Image priority src={"/logo_cm.png"} alt="Cara de Mau" width={70} height={70} />
        </div>
          <p className="text-xs pt-4">&copy; 2025 Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

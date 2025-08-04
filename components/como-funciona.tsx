import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaAccessibleIcon, FaCheckCircle } from 'react-icons/fa';
import { FaRegHourglass, FaPersonCircleExclamation, FaGift } from "react-icons/fa6";

const ComoFunciona = () => {
  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('backgrounds/background2.jpg')" }}>
      <div className="relative z-10 flex flex-col min-h-[100vh] py-10 items-center justify-center w-full text-center text-white bg-black bg-opacity-80">
        <div className='flex flex-col w-full max-w-xl mx-auto text-left space-y-4 px-5 text-sm'>

          <h1 className='text-2xl font-bold py-3'>Como funciona</h1>

          {/* Reservas */}
          <p><b className='font-bold'><FaCalendarAlt className="inline mr-2" />Reservas:</b></p>
          <p className='ml-6'>De terça a domingo, entre 14h e 23h – com 4 horas de duração</p>
          <p className='ml-6'>Reserva mínima de 30 pessoas (adultos e crianças)</p>

          {/* Incluso */}
          <p className='pt-4'><b className='font-bold'><FaGift className="inline mr-2" />O que está incluso (pacote básico):</b></p>
          <ul className='pl-8 space-y-2'>
            <li className='flex items-start'><FaCheckCircle className="text-green-500 mt-1 mr-2" /> Espaço temático exclusivo</li>
            <li className='flex items-start'><FaCheckCircle className="text-green-500 mt-1 mr-2" /> Som ambiente com suas playlists do Spotify</li>
            <li className='flex items-start'><FaCheckCircle className="text-green-500 mt-1 mr-2" /> Até 8 sabores de pizzas salgadas</li>
            <li className='flex items-start'><FaCheckCircle className="text-green-500 mt-1 mr-2" /> Até 4 sabores de pizzas doces</li>
            <li className='flex items-start'><FaCheckCircle className="text-green-500 mt-1 mr-2" /> Água e refrigerantes à vontade</li>
            <li className='flex items-start'><FaCheckCircle className="text-green-500 mt-1 mr-2" /> Atendimento com até 3 piratas</li>
          </ul>

          {/* Localização / Classificação / Acessibilidade */}
          <div className='space-y-4 pt-6'>
            <p>
              <b className='font-bold'><FaMapMarkerAlt className="inline mr-2" />Localização:</b> Av. dos Estados, 111 – Porto Alegre/RS
            </p>
            <p className='pl-6'>Dentro do Boulevard Laçador, ao lado do Aeroporto Salgado Filho.</p>

            <p><b className='font-bold'><FaPersonCircleExclamation className='inline mr-2' />Classificação:</b> Livre para todas as idades</p>
            <p><b className='font-bold'><FaAccessibleIcon className="inline mr-2" />Acessibilidade:</b> Local acessível para cadeirantes</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;

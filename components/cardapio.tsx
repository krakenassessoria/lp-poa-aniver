"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

const Cardapio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImageSrc('');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background3.jpg')" }}>
      <div className="relative z-10 flex flex-col pt-10 lg:pt-0 lg:items-center lg:justify-center w-full h-full px-4 text-center text-white bg-black bg-opacity-70">
        <h1 className="text-xl font-bold mb-2 uppercase">Já imaginou tudo isto acompanhado do melhor Fondue da Serra Gaúcha?</h1>
        <h2 className="text-lg mb-4">Um show de sabores harmonizados com os mais glamourosos espetáculos</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10 lg:px-1">
          <div className="card bg-white text-black rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal('/fondue/queijo.jpg')}>
            <div className="relative w-full h-28 md:h-40">
              <Image 
                priority
                src="/fondue/queijo.jpg" 
                alt="Queijos" 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className='text-sm'>Blend de queijos premiums</p>
            </div>
          </div>
          <div className="card bg-white text-black rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal('/fondue/carnes.jpg')}>
            <div className="relative w-full h-28 md:h-40">
              <Image 
                priority
                src="/fondue/carnes.jpg" 
                alt="Carnes" 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className='text-sm'>Cortes de carnes nobres</p>
            </div>
          </div>
          <div className="card bg-white text-black rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal('/fondue/chocolate.jpg')}>
            <div className="relative w-full h-28 md:h-40">
              <Image 
                src="/fondue/chocolate.jpg" 
                alt="Chocolate" 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className='text-sm'>Blend de chocolates de Gramado</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem Ampliada"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      >
        <div onClick={closeModal} className="relative w-full h-3/4 bg-black bg-opacity-75 rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <Image 
              src={modalImageSrc} 
              alt="Imagem ampliada" 
              fill
              style={{ objectFit: 'contain' }}
              className="z-50"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Cardapio;

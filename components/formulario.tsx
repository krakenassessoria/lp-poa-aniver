'use client';

import { useState } from 'react';
import { FaUser, FaPhone, FaCalendar, FaPeopleGroup, FaRegHourglass } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

const LeadForm = () => {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    data: '',
    pessoas: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'poa-aniver',
        'template_xh7bcny',
        {
          nome: form.nome,
          telefone: form.telefone,
          data: form.data,
          pessoas: form.pessoas,
          mensagem: form.mensagem,
        },
        'ubkJhLLS63uAkCQAt'
      )
      .then(() => {
        window.location.href = '/sucesso';
      })
      .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Erro ao enviar. Por favor, tente novamente mais tarde.');
        setLoading(false);
      });
  };

  return (
    <div className="w-full bg-black bg-opacity-80 text-white py-12 px-4">
      <div className="max-w-xl mx-auto text-left space-y-8">
        <h2 className="text-2xl font-bold text-center">Solicite seu orçamento</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label className="block mb-1 font-semibold"><FaUser className="inline mr-2" />Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white bg-opacity-10 rounded border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block mb-1 font-semibold"><FaPhone className="inline mr-2" />Telefone (WhatsApp)</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white bg-opacity-10 rounded border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Data */}
          <div>
            <label className="block mb-1 font-semibold"><FaCalendar className="inline mr-2" />Data Prevista</label>
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white bg-opacity-10 rounded border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Pessoas */}
          <div>
            <label className="block mb-1 font-semibold"><FaPeopleGroup className="inline mr-2" />Nº de Convidados (aproximado)</label>
            <input
              type="number"
              name="pessoas"
              value={form.pessoas}
              onChange={handleChange}
              min={1}
              required
              className="w-full p-2 bg-white bg-opacity-10 rounded border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="block mb-1 font-semibold"><FaRegHourglass className="inline mr-2" />Mensagem (opcional)</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 bg-white bg-opacity-10 rounded border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`mt-6 font-bold py-2 px-10 rounded transition duration-300 flex items-center justify-center gap-2 mx-auto
                ${loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-700 text-white'
                }`}
            >
              {loading && (
                <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
              )}
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;

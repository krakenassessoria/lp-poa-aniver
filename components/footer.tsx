import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "5554993712057";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Quero informações para aniversário no Salão Pérola (Porto Alegre)."
);
const MAPS_Q = encodeURIComponent(
  "Av. dos Estados, 111 - Boulevard Laçador, Porto Alegre - RS"
);

export default function Footer() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Cara de Mau - Salão Pérola",
    url: "https://aniver.carademau.com.br",
    telephone: "+55 54 99371-2057",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. dos Estados, 111 - Boulevard Laçador",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    servesCuisine: "Pizza",
    priceRange: "$$$",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual a capacidade do Salão Pérola?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Salão Pérola comporta até 120 pessoas sentadas.",
        },
      },
      {
        "@type": "Question",
        name: "Quais são os pacotes de aniversário?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pacotes com taxa de serviço inclusa: até 30 pessoas por R$ 4.500,00; até 40 pessoas por R$ 6.000,00; até 50 pessoas por R$ 7.500,00.",
        },
      },
      {
        "@type": "Question",
        name: "O que está incluso no pacote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pizza à vontade (8 sabores salgados e 4 doces), água e refrigerante, decoração fundo do mar com projeção, bolo decorativo para fotos, garçons piratas e sistema de som para playlist.",
        },
      },
      {
        "@type": "Question",
        name: "Quais são os horários e duração da festa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As festas podem ocorrer entre 14h e 23h, com até 4 horas de permanência. Não há disponibilidade nas segundas-feiras.",
        },
      },
      {
        "@type": "Question",
        name: "Existem adicionais?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim: Camarim das Sereias e Piratas (maquiadora) conforme consumo. Decoração diferente do fundo do mar e mesa de doces ficam sob responsabilidade do cliente.",
        },
      },
    ],
  };

  return (
    <footer className="bg-black text-white pb-20 pt-10">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <section
          aria-labelledby="faq-title"
          className="w-full max-w-3xl border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur"
        >
          <h2 id="faq-title" className="text-2xl font-bold mb-4 text-center">
            Perguntas frequentes
          </h2>

          <div className="divide-y divide-white/10">
            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>Qual a capacidade do Salão Pérola?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">Até 120 pessoas sentadas.</p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>Quais são os pacotes de aniversário?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Até 30 pessoas: R$ 4.500,00. Até 40 pessoas: R$ 6.000,00. Até 50 pessoas: R$ 7.500,00.
                Todos com taxa de serviço inclusa.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>O que está incluso no pacote?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Pizza à vontade (8 sabores salgados + 4 doces), água e refrigerante, decoração fundo do mar
                com projeção, bolo decorativo para fotos, garçons piratas e sistema de som para playlist.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>Quais são os horários e duração?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Horários entre 14h e 23h, com até 4 horas de permanência. Não disponível nas segundas-feiras.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>Existem adicionais para personalizar?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Camarim das Sereias e Piratas (maquiadora), conforme consumo. Decoração diferente do fundo do mar
                e mesa de doces são de responsabilidade do cliente.
              </p>
            </details>
          </div>
        </section>

        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Fale conosco</h3>

          <div className="flex flex-col items-center space-y-3">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-5 py-2 font-semibold text-white hover:bg-slate-800 transition"
            >
              <FaWhatsapp aria-hidden className="text-lg" />
              <span>(54) 99371-2057</span>
            </a>

            <address className="not-italic text-sm text-gray-200 text-center leading-relaxed">
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt aria-hidden />
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${MAPS_Q}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted hover:decoration-solid"
                  aria-label="Abrir mapa no Google Maps"
                >
                  Av. dos Estados, 111 - Porto Alegre/RS
                </Link>
              </div>
              <div className="text-gray-400">
                Dentro do Boulevard Laçador, ao lado do Aeroporto Salgado Filho.
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            priority
            src="/logo_cm.png"
            alt="Cara de Mau - Pizzaria temática"
            width={80}
            height={80}
            className="opacity-95"
          />
          <p className="text-xs pt-4 text-gray-400">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

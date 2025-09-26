import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "5554993712057";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Quero informações para aniversário no Salão Pérola (tema pirata)."
);
const MAPS_Q = encodeURIComponent(
  "Av. dos Estados, 111 - Boulevard Laçador, Porto Alegre - RS"
);

export default function Footer() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Cara de Mau - Salão Pérola",
    url: "https://seu-dominio.com", // troque pelo domínio real
    telephone: "+55 54 99371-2057",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. dos Estados, 111 - Boulevard Laçador",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    servesCuisine: "Pizza",
    priceRange: "$$",
  };

  // FAQ estruturado para rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Onde comemorar aniversário em Porto Alegre com tema pirata?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No Salão Pérola do Cara de Mau, um espaço exclusivo em Porto Alegre com decoração temática pirata e fundo do mar, atendimento completo e a melhor pizzaria temática do Brasil.",
        },
      },
      {
        "@type": "Question",
        name: "O espaço atende festas infantis e adultas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sim. O salão foi pensado para encantar crianças e adultos, com ambientação imersiva e cardápio que agrada todas as idades.",
        },
      },
      {
        "@type": "Question",
        name: "Como reservar o salão para aniversário?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Você pode reservar pelo WhatsApp ou formulário do site. Nossa equipe confirma disponibilidade, opções de menu e detalhes da sua festa.",
        },
      },
      {
        "@type": "Question",
        name: "O salão fica onde em Porto Alegre?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dentro do Boulevard Laçador, na Av. dos Estados, 111 — ao lado do Aeroporto Salgado Filho.",
        },
      },
      {
        "@type": "Question",
        name: "Há opções personalizadas para o tema da festa?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sim. Oferecemos personalizações de ambientação e experiência temática pirata/fundo do mar, conforme a necessidade do seu evento.",
        },
      },
    ],
  };

  return (
    <footer className="bg-black text-white pb-20 pt-10">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-10">
        {/* JSON-LD (empresa/local) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* JSON-LD (FAQ) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* FAQ visível (acessível) */}
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
                <span>Onde comemorar aniversário em Porto Alegre com tema pirata?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                No <strong>Salão Pérola do Cara de Mau</strong>, com decoração
                <strong> pirata e fundo do mar</strong>, atendimento completo e a
                <strong> melhor pizzaria temática do Brasil</strong>.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>O espaço atende festas infantis e adultas?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Sim. A ambientação imersiva foi pensada para encantar crianças e adultos.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>Como reservar o salão para aniversário?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Fale conosco pelo{" "}
                <a
                  className="underline decoration-dotted hover:decoration-solid"
                  href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>{" "}
                ou pelo formulário. Confirmamos disponibilidade, menu e detalhes do evento.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>O salão fica onde em Porto Alegre?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Dentro do Boulevard Laçador — Av. dos Estados, 111, ao lado do Aeroporto Salgado Filho.
              </p>
            </details>

            <details className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>Há opções personalizadas para o tema da festa?</span>
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-200">
                Sim. Oferecemos personalizações de ambientação e experiência temática pirata/fundo do mar.
              </p>
            </details>
          </div>
        </section>

        {/* Contatos */}
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
                  Av. dos Estados, 111 — Porto Alegre/RS
                </Link>
              </div>
              <div className="text-gray-400">
                Dentro do Boulevard Laçador, ao lado do Aeroporto Salgado Filho.
              </div>
            </address>
          </div>
        </div>

        {/* Marca/Créditos */}
        <div className="flex flex-col items-center">
          <Image
            priority
            src="/logo_cm.png"
            alt="Cara de Mau — Pizzaria temática"
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

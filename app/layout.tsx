import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GA_MEASUREMENT_ID, LANDING_CONTEXT } from "@/lib/gtag";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aniver.carademau.com.br"),
  title: "Eventos e aniversários",
  icons: { icon: "/logo.png" },
  verification: {
    google: "eL3t9uyi0VSJynzfgbIIszwy2Lx8khum2s2vA3x9M4c"
  },
  description:
    "Celebre seu aniversário em grande estilo no espaço temático mais divertido de Porto Alegre! No Salão Pérola do Cara de Mau, você vive uma experiência única com tema pirata e fundo do mar, atendimento incrível e a melhor pizzaria temática do Brasil.",
  keywords: [
    "aniversário Porto Alegre",
    "festa temática Porto Alegre",
    "salão de festas Porto Alegre",
    "salão pirata Porto Alegre",
    "festa infantil Porto Alegre",
    "pizzaria temática Porto Alegre",
    "festa de aniversário infantil",
    "salão fundo do mar Porto Alegre",
    "onde fazer aniversário Porto Alegre",
    "aniversário com tema pirata",
    "restaurante para aniversário Porto Alegre",
    "salão exclusivo Cara de Mau",
  ],
  openGraph: {
    title: "Aniversários Temáticos com Tema Pirata em Porto Alegre | Cara de Mau",
    description:
      "Viva uma celebração inesquecível com tema pirata e fundo do mar no espaço exclusivo do Cara de Mau em Porto Alegre. Perfeito para aniversários e festas temáticas com a melhor pizzaria temática do Brasil.",
    url: "https://aniver.carademau.com.br",
    siteName: "Cara de Mau Porto Alegre",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aniversário temático pirata no Cara de Mau Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festas e Aniversários Temáticos | Cara de Mau Porto Alegre",
    description:
      "Tema pirata, fundo do mar e a melhor pizzaria temática do Brasil - tudo em um espaço exclusivo em Porto Alegre para seu aniversário ser épico!",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

const FB_PIXEL_ID = '';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {FB_PIXEL_ID ? (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}

        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('event', 'view_landing', {
              city: '${LANDING_CONTEXT.city}',
              location: '${LANDING_CONTEXT.location}',
              landing_name: '${LANDING_CONTEXT.landingName}',
              landing_offer: '${LANDING_CONTEXT.landingOffer}',
              landing_source: 'landing_page',
              destination_product: '${LANDING_CONTEXT.destinationProduct}',
              funnel_step: 'landing_view'
            });
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        {FB_PIXEL_ID ? (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}

        <div className="flex flex-col w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}

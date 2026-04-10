import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GTMPageView from "@/components/gtmpageview";
import { Suspense } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aniver.carademau.com.br"),
  title: "Eventos e aniversÃ¡rios",
  icons: { icon: "/logo.png" },
  verification: {
    google: "eL3t9uyi0VSJynzfgbIIszwy2Lx8khum2s2vA3x9M4c"
  },
  description:
    "Celebre seu aniversÃ¡rio em grande estilo no espaÃ§o temÃ¡tico mais divertido de Porto Alegre! No SalÃ£o PÃ©rola do Cara de Mau, vocÃª vive uma experiÃªncia Ãºnica com tema pirata e fundo do mar, atendimento incrÃ­vel e a melhor pizzaria temÃ¡tica do Brasil.",
  keywords: [
    "aniversÃ¡rio Porto Alegre",
    "festa temÃ¡tica Porto Alegre",
    "salÃ£o de festas Porto Alegre",
    "salÃ£o pirata Porto Alegre",
    "festa infantil Porto Alegre",
    "pizzaria temÃ¡tica Porto Alegre",
    "festa de aniversÃ¡rio infantil",
    "salÃ£o fundo do mar Porto Alegre",
    "onde fazer aniversÃ¡rio Porto Alegre",
    "aniversÃ¡rio com tema pirata",
    "restaurante para aniversÃ¡rio Porto Alegre",
    "salÃ£o exclusivo Cara de Mau",
  ],
  openGraph: {
    title: "AniversÃ¡rios TemÃ¡ticos com Tema Pirata em Porto Alegre | Cara de Mau",
    description:
      "Viva uma celebraÃ§Ã£o inesquecÃ­vel com tema pirata e fundo do mar no espaÃ§o exclusivo do Cara de Mau em Porto Alegre. Perfeito para aniversÃ¡rios e festas temÃ¡ticas com a melhor pizzaria temÃ¡tica do Brasil.",
    url: "https://aniver.carademau.com.br",
    siteName: "Cara de Mau Porto Alegre",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AniversÃ¡rio temÃ¡tico pirata no Cara de Mau Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festas e AniversÃ¡rios TemÃ¡ticos | Cara de Mau Porto Alegre",
    description:
      "Tema pirata, fundo do mar e a melhor pizzaria temÃ¡tica do Brasil â€” tudo em um espaÃ§o exclusivo em Porto Alegre para seu aniversÃ¡rio ser Ã©pico!",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

const GTM_ID = 'GTM-KV7HHTPD'
const FB_PIXEL_ID = ''

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* GTM */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Meta Pixel */}
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
      </head>
      <body className={montserrat.className}>
        {/* GTM noscript */}
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        {/* Meta Pixel noscript */}
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

        {/* ðŸ‘‡ Envolva o componente com Suspense */}
        {GTM_ID ? (
          <Suspense fallback={null}>
            <GTMPageView />
          </Suspense>
        ) : null}

        <div className="flex flex-col w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}


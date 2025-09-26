import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GTMPageView from "@/components/gtmpageview";
import { Suspense } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"], display: "swap" });

export const metadata: Metadata = {
  title: "Eventos e aniversários",
  description: "No Cara de Mau Porto Alegre temos o Salão Pérola, um espaço exclusivo para eventos e aniversários.",
  icons: { icon: "/logo.png" },
  verification: {
    google: "eL3t9uyi0VSJynzfgbIIszwy2Lx8khum2s2vA3x9M4c"
  }
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

        {/* 👇 Envolva o componente com Suspense */}
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

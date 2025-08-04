import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['300'] });

export const metadata: Metadata = {
  title: "Porto Cara de Mau",
  description: "Aqui os piratas matam a fome",
  icons: {
    icon: "/logo.png"
  }
};

export const viewport = {
  themeColor: '#000000',
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '531786234432413');
              fbq('track', 'PageView');
            `,
          }}
        />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JEYZZS5XMW"></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JEYZZS5XMW');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <div className="flex flex-col w-full h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

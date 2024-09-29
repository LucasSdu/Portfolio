import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script' 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Sdunnek',
  description: 'Willkommen bei meinem Portfolio. Mein Name ist Lucas Sdunnek',
}

const GA_TRACKING_ID = 'G-GX97SM11DB';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}

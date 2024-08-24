import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Sdunnek Portfolio',
  description: 'Willkommen bei meinen Portfolio. Mein Name ist Lucas Sdunnek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
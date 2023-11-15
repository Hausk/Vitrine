import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import { Lato } from 'next/font/google'
import './globals.css'

const title = Roboto_Slab({ subsets: ['latin'] })
const text = Lato({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Libre & Vivant',
  description: 'Libre & Vivant photographie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={title.className}>{children}</body>
    </html>
  )
}

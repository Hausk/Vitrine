import type { Metadata } from 'next'
import { robotoslab, lato } from '@/app/ui/fonts';
import './globals.css'

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
      <body className={`${robotoslab.className} antialiased`}>{children}</body>
    </html>
  )
}

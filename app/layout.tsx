import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../env.Configs'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BizManager - Micronegócio',
  description: 'Sistema de gerenciamento para micronegócios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
} 
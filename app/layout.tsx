import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Industrial IP',
  description: 'Enterprise Structural IP',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  )
}

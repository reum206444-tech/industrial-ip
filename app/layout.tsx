// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Industrial IP',
  description: 'Enterprise Structural IP Marketplace',
}

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse IP' },
  { href: '/industries', label: 'Industries' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/sell', label: 'Sell IP' },
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      {/* ✅ 라이트 테마 기본 */}
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Global Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm tracking-widest text-slate-900 hover:text-slate-700"
            >
              INDUSTRIAL IP
            </Link>

            <nav className="hidden md:flex gap-6 text-sm text-slate-600">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 모바일 메뉴는 나중에 구현하고, 톤만 맞춤 */}
            <div className="md:hidden text-xs text-slate-500">Menu →</div>
          </div>
        </header>

        {/* Page */}
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Industrial IP Marketplace</div>

            <div className="flex gap-4">
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/terms" className="hover:text-slate-900">
                Terms
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
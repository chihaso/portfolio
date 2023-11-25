import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'chihaso portfolio',
  description: 'chihasoが作ったアプリ等をまとめたポートフォリオです。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className="text-center text-3xl mt-10 text-gray-700">chihasoのポートフォリオ</h1>
        </header>
        {children}
      </body>
    </html>
  )
}

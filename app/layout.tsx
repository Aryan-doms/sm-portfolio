import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Aryan — Social Media Manager',
  description: 'Social Media Manager portfolio: strategy, content, and analytics. Featuring BetterCallThrift — a Surat-based thrift brand.',
  openGraph: {
    title: 'Aryan — Social Media Manager',
    description: 'Social Media Manager portfolio. Featuring BetterCallThrift — a Surat-based thrift brand.'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}

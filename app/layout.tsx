import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' })
const outfit = Outfit({ subsets: ["latin"], variable: '--font-serif' })
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Caretech Hub | Smart Baby Care Solutions',
  description: 'Discover AI-powered baby monitors, hospital-grade sterilizers, and smart essentials for modern families.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#00FFC6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

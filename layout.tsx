import Header from '@/components/header'
import Footer from '@/components/footer'
import MobileMenu from '@/components/mobile-menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BELLWETHER Cleaning Services',
  description: 'Premium cleaning services for discerning clients in East London. Offering deep cleaning, end of tenancy, and regular maintenance services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

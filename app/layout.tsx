import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: 'Musa Shaikh | Cloud DevOps & Security Engineer',
  description: 'Cloud DevOps Engineer, Security Specialist, Full Stack Developer & AI/ML Practitioner. Specializing in AWS, Penetration Testing, and Modern Web Technologies.',
  keywords: ['Cloud DevOps', 'Security Engineer', 'Penetration Testing', 'Full Stack Developer', 'AI/ML', 'AWS'],
  authors: [{ name: 'Shaikh Mohammed Musa' }],
  openGraph: {
    title: 'Musa Shaikh | Cloud DevOps & Security Engineer',
    description: 'Cloud DevOps Engineer, Security Specialist, Full Stack Developer & AI/ML Practitioner.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#fafafa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

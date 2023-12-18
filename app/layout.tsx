import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import AuthProvider  from './context/auth';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SNS udemy',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico' />
      </head>
      <body>
        <AuthProvider>
          <Navbar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

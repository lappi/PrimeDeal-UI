import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "@/app/providers"
import  Header  from "@/components/header"
import { Rainbow } from "@/service/rainbow-kit-provider"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <Rainbow>
       <Providers>
         
            <main className='light text-foreground bg-[#D2D9EE] box-border'>
              <Header/>
              {children}
              <Footer />   
            </main> 
         
        </Providers>
      </Rainbow>
      </body>
    </html>
  )
}

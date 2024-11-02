/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from './providers/theme-provider'
import Header from '@/components/main/Header'
import localFont from 'next/font/local'
// import Footer from '@/components/main/Footer'
import dynamic from 'next/dynamic'
const Loader = dynamic(() => import("../components/main/Loader"), { ssr: false });
import { Loading } from '../../utils/types'
import {CookiesProvider} from "react-cookie"
import {motion} from "framer-motion"
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <ClerkProvider>
      <CookiesProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              <motion.section 
                animate="animate" 
                initial="initial"
                variants={{
                  initial:{
                    clipPath:"circle(100% at 50% 50%)",
                  },
                  animate:{
                    clipPath:"circle(0% at 50% 50%)",
                  }
                }}
                className='fixed top-0 left-0 w-[100vw] h-[100vh] z-50 bg-slate-500'
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  type: "tween"
                }}>
                <Loader type={Loading.LOADING}/>
              </motion.section>
              <Header/>
              {children}
              {/* <Footer/> */}
            </ThemeProvider>
          </body>
        </html>
      </CookiesProvider>
    </ClerkProvider>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from './providers/theme-provider'
import Header from '@/components/main/Header'
import localFont from 'next/font/local'
import Footer from '@/components/main/Footer'
import Loader from '@/components/main/Loader'
import { Loading } from '../../utils/types'
import { useState } from 'react'
import { useTheme } from 'next-themes'
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
    const [timer,setTimer] = useState(0);
    setInterval(()=>{
      setTimer(prev=>prev+=0.25);
    },250)
    const {theme} = useTheme();
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
              <div className={`flex flex-row justify-center items-center fixed top-0 left-0 w-screen h-screen z-50 ${theme=="dark"?"bg-slate-800":"bg-slate-400"}`} style={{
                clipPath:timer<2?"circle(100% at 50% 50%)":"circle(0% at 50% 50%)",
                transition:".75s"
              }}>
                <Loader type={Loading.LOADING}/>
              </div>
            <Header/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

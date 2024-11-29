import { AppSidebar } from '@/components/main/app-sidebar'
import React from 'react'

export default function Page() {
  return (
    <main className='w-full min-h-screen flex flex-col justify-start items-center flex-wrap relative'>
        <section className='w-full flex flex-col justify-center items-center gap-2 p-2 absolute top-28 pb-10'>
            <AppSidebar/>
        </section>
    </main>
  )
}

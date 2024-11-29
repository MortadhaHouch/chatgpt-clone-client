"use client"
import { BentoDemo } from '@/components/main/Bento'
import { MeteorDemo } from '@/components/main/MeteorDemo'
import { Button } from '@/components/ui/button'
export default function Features() {
  return (
    <main className='flex flex-col justify-center items-center flex-wrap pt-28 gap-5'>
      <BentoDemo/>
      <MeteorDemo children={<NestComponent/>}/>
    </main>
  )
}
const NestComponent = ()=>{
  return (
    <>
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Still doubting
      </span>
      <div className="buttons">
        <Button className="btn"><span></span><p data-start="good luck!" data-text="enjoy" data-title="Get started"></p></Button>
      </div>
    </>
  )
}
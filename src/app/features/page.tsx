"use client"
import { BentoDemo } from '@/components/main/Bento'
import { MeteorDemo } from '@/components/main/MeteorDemo'
import React from 'react'

export default function Features() {
  return (
    <main className='flex flex-col justify-center items-center flex-wrap pt-28 gap-5'>
      <BentoDemo/>
      <MeteorDemo/>
    </main>
  )
}
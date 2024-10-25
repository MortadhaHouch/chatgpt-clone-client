"use client"
import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function Signup() {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>
      <SignUp/>
    </main>
  )
}

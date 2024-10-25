"use client"
import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Login() {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>
      <SignIn/>
    </main>
  )
}

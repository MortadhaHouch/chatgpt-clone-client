"use client"
import React from 'react'
import { DockDemo } from './DockDemo';
export default function Footer() {
  return (
    <footer className='w-full h-auto fixed bottom-0 flex flex-col justify-center items-center'>
      <DockDemo/>
    </footer>
  )
}

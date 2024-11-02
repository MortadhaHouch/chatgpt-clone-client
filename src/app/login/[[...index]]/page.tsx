/* eslint-disable @typescript-eslint/no-unused-vars */
import {SignIn } from '@clerk/nextjs'
import Background from "../../../../assets/images/login.svg"
import Image from 'next/image';
export default function Login() {
  return (
    <main className='w-screen h-screen flex flex-row justify-center items-center gap-3 flex-wrap'>
      <Image src={Background}  alt="Background" style={{width:"clamp(300px,30%,450px)",height:"clamp(300px,30%,450px)"}} objectFit="cover" />
      <SignIn/>
    </main>
  )
}

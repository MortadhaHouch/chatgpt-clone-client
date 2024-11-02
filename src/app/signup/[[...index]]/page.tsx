/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { SignUp } from '@clerk/nextjs';
import Background from "../../../../assets/images/singup.svg"
import Image from 'next/image';
export default function SignUpComponent() {
  return (
    <main className='w-[100vw] min-h-[110vh] flex flex-row justify-center items-center'>
      <Image src={Background}  alt="Background" style={{width:"clamp(350px,30%,450px)",height:"clamp(350px,30%,450px)"}} objectFit="cover" />
      <SignUp/>
    </main>
  )
}

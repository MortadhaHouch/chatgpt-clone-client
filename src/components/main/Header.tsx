"use client"
import React from 'react'
import { ModeToggle } from '../ui/ModeToggle'
import Image from 'next/image'
import Logo1 from "../../../assets/images/logo-white-removebg-preview.png"
import Logo2 from "../../../assets/images/logo-black-removebg-preview.png"
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '../ui/button';
import { IoMdLogIn } from "react-icons/io";
import { FaMagic } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa";
export default function Header() {
    const {theme} = useTheme();
    return (
        <header 
            className='flex flex-row justify-between items-center w-full h-auto p-1 fixed z-30 backdrop-blur-lg'
            style={{width:"80vw",padding:10,borderRadius:"20px",border:"2px solid rgba(255,255,255,0.25)"}}
        >
            <Link href={"/home"}>
                <Image src={(theme == "light"||theme == "system")?Logo2:Logo1} alt='logo' height={60} style={{mixBlendMode:"color-burn"}}/>
            </Link>
            <div className='flex flex-row gap-1'>
                <Button>
                    <Link href={"/features"} className='flex flex-row justify-center items-center'>
                        <FaMagic />
                        Features
                    </Link>
                </Button>
                <Button>
                    <Link href={"/community"} className='flex flex-row justify-center items-center'>
                        <HiMiniUserGroup />
                        Community
                    </Link>
                </Button>
                <Button>
                    <Link href={"/about"} className='flex flex-row justify-center items-center'>
                        <FaQuestion />
                        About us
                    </Link>
                </Button>
                <Button>
                    <Link href={"/login"} className='flex flex-row justify-center items-center'>
                        <IoMdLogIn/>
                        login
                    </Link>
                </Button>
            </div>
            <ModeToggle/>
        </header>
    )
}
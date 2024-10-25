"use client"
import React, { useState } from 'react'
import { posts } from '../../../utils/constants'
import { IoIosAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuActivitySquare } from "react-icons/lu";
import { useTheme } from 'next-themes'
import {motion} from "framer-motion"
import { Dialog } from '@/components/main/DialogDemo'
import Post from '@/components/main/Post'
import { FaHome, FaSearch } from 'react-icons/fa';
export default function Community() {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const {theme} = useTheme();
  return (
    <main className='w-full h-full flex flex-col justify-center items-center flex-wrap gap-3 p-2 mt-28'>
      <motion.div 
        initial="initial" 
        animate="final"
        variants={{
          initial:{
            opacity:0,
            x:-100
          },
          final:{
            opacity:1,
            x:0
          }
        }}
        transition={{
          duration:2,
          ease:"easeInOut"
        }}
        className='flex flex-col justify-center items-start gap-5 p-2 fixed top-16 left-0 h-[100dvh]' style={{width:"clamp(300px,40%,500px)"}}>
        <FaHome size={40} color={theme=="dark"?"rgba(255,255,255,.25)":"black"}/>
        <FaSearch size={40} color={theme=="dark"?"rgba(255,255,255,.25)":"black"}/>
        <IoIosAdd size={40} color={theme=="dark"?"rgba(255,255,255,.25)":"black"} onClick={()=>setIsOpen(true)}/>
        <CgProfile size={40} color={theme=="dark"?"rgba(255,255,255,.25)":"black"}/>
        <LuActivitySquare size={40} color={theme=="dark"?"rgba(255,255,255,.25)":"black"}/>
      </motion.div>
      <Dialog open={isOpen} setIsOpen={setIsOpen}/>
      {
        posts.map((item,index)=>{
          return (
            <Post post={item} index={index} key={index}/>
          )
        })
      }
    </main>
  )
}

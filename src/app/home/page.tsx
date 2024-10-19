"use client"
import { BackgroundBeamsWithCollisionDemo } from '@/components/main/BackgroundBeamsWithCollisionDemo'
import { HeroHighlightDemo } from '@/components/main/HeroHighlightDemo'
import { ThreeDCardDemo } from '@/components/main/ThreeDCardDemo'
import React, {  } from 'react'
import chat_ui from "../../../assets/images/chat_ui.jpeg"
import mobile_chat_ui from "../../../assets/images/mobile_chat_ui.jpeg"
import pc_mobile_mockup from "../../../assets/images/pc_mobile_mockup.png"
import { TextRevealCardPreview } from '@/components/main/TextRevealCardPreview'
import Draggable from '@/components/main/Draggable'
export default function page() {
  return (
    <main>
      <section className='w-full h-screen flex flex-row justify-center items-center flex-wrap'>
        <TextRevealCardPreview/>
      </section>
      <section className='flex flex-col justify-center items-center flex-wrap gap-1 p-2'>
        <Draggable>
          <h1
            style={{
              fontSize:"72px",
              background:"-webkit-linear-gradient(45deg, #09009f, #00ff95 80%)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              border:"2px solid #00ff95",
              position:"relative",
              padding:"5px 10px"
            }}
            className='title'
          >Why you should choose us?
            <span></span><span></span><span></span><span></span>
          </h1>
        </Draggable>
        <div className='flex flex-row justify-center items-center flex-wrap gap-2 p-2'>
          <ThreeDCardDemo title='' description='' url1="" url2='' ImageURL={chat_ui}/>
          <ThreeDCardDemo title='' description='' url1="" url2='' ImageURL={mobile_chat_ui}/>
          <ThreeDCardDemo title='' description='' url1="" url2='' ImageURL={pc_mobile_mockup}/>
        </div>
      </section>
      <HeroHighlightDemo/>
      <BackgroundBeamsWithCollisionDemo/>
    </main>
  )
}

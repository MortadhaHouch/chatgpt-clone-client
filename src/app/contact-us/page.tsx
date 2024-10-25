"use client"
import { MovingBorderDemo } from '@/components/main/MovingBorderDemo'
import { CardBody } from '@/components/ui/3d-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { } from 'react'
import { FiSend } from "react-icons/fi";
import Logo1 from "../../../assets/images/logo-white-removebg-preview.png"
import Logo2 from "../../../assets/images/logo-black-removebg-preview.png"
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Image1 from "../../../assets/images/Contact us-cuate.svg";
import {motion} from "framer-motion"
export default function ContactUs() {
    const {theme} = useTheme()
    return (
        <main className='min-w-[100vw] min-h-[100vh] flex flex-row justify-center items-center flex-wrap gap-3 p-2'>
            <motion.div
                className='flex flex-col justify-center items-center gap-2 p-2 z-0'
                variants={{
                    animate:{
                        opacity:1,
                        x:0
                    },
                    initial:{
                        opacity:0,
                        x:-100
                    }
                }}
                transition={{
                    type:"spring",
                    stiffness:260,
                    damping:20,
                    duration:1
                }}
                animate="animate"
                initial="initial"
            >
                <Image
                    src={Image1}
                    alt='image'
                    width={350} 
                    height={350} 
                    style={{
                        width:"clamp(400px,100%,500px)",
                        height:"clamp(400px,100%,500px)",
                        zIndex:0
                    }}
                />
            </motion.div>
            <Card 
                className='flex flex-col justify-center items-center gap-2 p-2 z-10' 
                style={{
                    width:"clamp(300px,30%,500px)",
                    backgroundColor:(theme == "light"||theme == "system")?"rgba(255,255,255,.25)":"rgba(0,0,0,.25)",
                    backdropFilter:"blur(10px)"
                }}>
                <CardHeader>
                    <Image src={(theme == "light"||theme == "system")?Logo2:Logo1} alt='logo' height={60} style={{mixBlendMode:"color-burn"}}/>
                    <CardTitle>
                        <motion.h1 
                            initial="initialState" 
                            animate="animateState"
                            transition={{
                                type:"spring",
                                duration:1,
                            }}
                            variants={{
                                initialState:{
                                    opacity:0,
                                    y:-100
                                },
                                animateState:{
                                    opacity:1,
                                    y:0
                                }
                            }}
                            className="text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">Get in touch with us</motion.h1>
                    </CardTitle>
                </CardHeader>
                <CardBody className='w-full h-auto flex flex-col justify-center items-center gap-3'>
                    <motion.form
                        initial="initialStage" 
                        animate="animateStage"
                        transition={{
                            type:"spring",
                            duration:1,
                        }}
                        variants={{
                            initialStage:{
                                opacity:0,
                                y:-100
                            },
                            animateStage:{
                                opacity:1,
                                y:0
                            }
                        }} 
                        action="" 
                        className='w-full h-auto flex flex-col justify-center items-center gap-3'>
                        <div className='w-full flex flex-col justify-center items-center ga-2 p-1'>
                            <Label htmlFor='name'>name</Label>
                            <Input required type='text' id='name' placeholder='name' className="w-[clamp(300px,30%,400px)]"/>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center gap-2 p-1'>
                            <Label htmlFor='email'>email</Label>
                            <Input required type='email' id='email' placeholder='Email' className="w-[clamp(300px,30%,400px)]"/>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center gap-2 p-1'>
                            <Label htmlFor='message'>Type your message</Label>
                            <Textarea required name='message' className="resize-none w-[clamp(300px,30%,400px)] h-[clamp(300px,30%,400px)]"/>
                        </div>
                        <MovingBorderDemo component={<><FiSend size={20}/><span>Send message</span></>}/>
                    </motion.form>
                </CardBody>
            </Card>
        </main>
    )
}

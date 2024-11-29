"use client"
import { Button } from "../ui/button";
import Meteors from "../ui/meteors";
import {motion} from "framer-motion"
export function MeteorDemo({children}:{children:React.ReactNode}) {
  return (
    <motion.div
      animate="animate"
      initial="initial"
      variants={{
        initial:{
          opacity: 0,
          y:-100,
          filter:"blur(10px)",
          rotateX:90
        },
        animate:{
          rotateX:0,
          opacity: 1,
          filter:"blur(0px)",
          y:0
        }
      }}
      transition={{
        duration:1.5,
        ease:"easeInOut"
      }}
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Meteors number={30} />
      {children}
    </motion.div>
  );
}

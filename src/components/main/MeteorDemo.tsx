import { Button } from "../ui/button";
import Meteors from "../ui/meteors";
import {motion} from "framer-motion"
export function MeteorDemo() {
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
      className="relative flex h-[500px] w-[95%] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Still doubting
      </span>
      <div className="buttons">
        <Button className="btn"><span></span><p data-start="good luck!" data-text="enjoy" data-title="Get started"></p></Button>
    </div>
    </motion.div>
  );
}

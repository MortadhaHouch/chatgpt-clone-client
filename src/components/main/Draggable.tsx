"use client"
import {motion, useMotionValue} from "framer-motion"
export default function Draggable({children}:{children:JSX.Element}) {
  const x = useMotionValue(0);
  return (
    <motion.div
        style={{x}} 
        drag="x"
        dragConstraints={{ left: 100, right: 100 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: "grabbing" }}
    >
        {children}
    </motion.div>
  )
}

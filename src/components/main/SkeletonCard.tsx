
import { Skeleton } from "@/components/ui/skeleton"
import {motion} from "framer-motion"
export function SkeletonCard({
    index
}:{
    index:number
}) {
    return (
        <motion.div 
            // animate-pulse 
            className="flex flex-col space-y-3 skeleton"
            variants={{
                initial:{
                    y:50,
                    opacity:0,
                    scale:.9,
                    skewY:25
                },
                final:{
                    y:0,
                    opacity:1,
                    scale:1,
                    skewY:0
                }
            }}
            initial={"initial"}
            animate={"final"}
            transition={{
                duration:.5,
                ease:"easeInOut",
                delay:.25*index
            }}
        >
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </motion.div>
    )
}
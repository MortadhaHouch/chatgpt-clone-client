import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { MovingBorderDemo } from "./MovingBorderDemo";
import Link from "next/link";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col justify-evenly items-center">
      <h3 className="text-xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What are you waiting for?{" "}
      </h3>
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <MovingBorderDemo component={<Link href={"/login"} className="text-3xl">Get started</Link>}/>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

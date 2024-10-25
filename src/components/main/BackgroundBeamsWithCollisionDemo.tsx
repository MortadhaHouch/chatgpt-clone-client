import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { MovingBorderDemo } from "./MovingBorderDemo";
import Link from "next/link";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="w-full h-screen flex flex-col justify-evenly items-center">
      <h3 className="text-xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What are you waiting for?{" "}
      </h3>
      <MovingBorderDemo component={<Link href={"/login"} className="text-3xl">Get started</Link>}/>
    </BackgroundBeamsWithCollision>
  );
}

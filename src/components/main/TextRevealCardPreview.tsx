
import React, { Suspense } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "../models/Robot";

export function TextRevealCardPreview() {
  return (
    <section className="flex items-center justify-center flex-wrap rounded-2xl w-full h-auto pt-28">
      <TextRevealCard
        text="The more you're confident"
        revealText="The more you're productive"
      >
        <TextRevealCardTitle>
          Chatterly
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Sometimes, all you need is an accurate solution to a problem.
        </TextRevealCardDescription>
      </TextRevealCard>
        <Canvas shadows frameloop="always" className='w-[clamp(300px,50%,400px)]' style={{height:"300px !important"}}>
          <directionalLight intensity={.75} position={[5, 5, 5]}/>
          <ambientLight intensity={.45}/>
          <OrbitControls enableZoom={false} enableDamping enablePan enableRotate autoRotate autoRotateSpeed={.75}/>
          <Suspense fallback="loading...">
            <Robot/>
          </Suspense>
        </Canvas>
    </section>
  );
}

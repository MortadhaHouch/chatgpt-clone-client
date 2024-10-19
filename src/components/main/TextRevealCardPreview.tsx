"use client";
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
    <div className="flex items-center justify-center flex-wrap h-full rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
      <Canvas shadows frameloop="always" className='w-[50%] h-auto'>
          <directionalLight intensity={.75} position={[5, 5, 5]}/>
          <OrbitControls enableZoom={false} enableDamping enablePan enableRotate autoRotate autoRotateSpeed={.75}/>
          <Suspense fallback="loading...">
            <Robot/>
          </Suspense>
        </Canvas>
    </div>
  );
}

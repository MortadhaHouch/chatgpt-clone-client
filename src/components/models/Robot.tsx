"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
export default function Robot() {
  const group = useRef<Mesh>(null)
  const { animations,scene } = useGLTF("/3d/earth-cartoon.glb");
  const { actions } = useAnimations(animations, group)
  const firstAction = actions[Object.keys(actions)[0]];
  useFrame(() => {
    if (actions) {
      if (firstAction) firstAction.play();
    }
  });
  return (
    <mesh scale={[3,3,3]} ref={group} castShadow receiveShadow>
      <primitive ref={group} object={scene}/>
    </mesh>
  )
}

useGLTF.preload("/3d/earth-cartoon.glb")
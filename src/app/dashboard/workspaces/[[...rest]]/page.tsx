"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/main/Sidebar';
import { Reorder } from 'framer-motion';
import { SkeletonCard } from '@/components/main/SkeletonCard';
import { TabType } from '../../../../../utils/types';

export default function Workspaces() {
  const [tab,setTab] = useState<TabType>(TabType.WORKSPACES);
  const items = [0,1,2,3,4,5,6,7,8,9,10];
  const [components,setComponents] = useState(items)
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap absolute pt-28'>
      <Sidebar tab={tab} setTab={setTab}/>
      <Reorder.Group className="flex flex-row justify-center items-center flex-wrap gap-2" values={components} onReorder={setComponents}>
        {
          components.map((item,index)=>{
            return(
              <Reorder.Item value={item} key={index}>
                <SkeletonCard index={index}/>
              </Reorder.Item>
            )
          })
        }
      </Reorder.Group>
    </main>
  )
}

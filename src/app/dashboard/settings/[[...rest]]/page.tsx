"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/main/Sidebar';
import { TabType } from '../../../../../utils/types';

export default function Settings() {
  const [tab,setTab] = useState<TabType>(TabType.SETTINGS);
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap absolute pt-28'>
      <Sidebar tab={tab} setTab={setTab}/>
    </main>
  )
}

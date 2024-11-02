"use client"
import React, { useState } from 'react'
import { TabType } from '../../../../../utils/types';
import Sidebar from '@/components/main/Sidebar';
import {UserProfile} from "@clerk/nextjs"
export default function Profile() {
  const [tab,setTab] = useState<TabType>(TabType.PROFILE);
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap absolute pt-28'>
      <Sidebar tab={tab} setTab={setTab}/>
      <UserProfile/>
    </main>
  )
}

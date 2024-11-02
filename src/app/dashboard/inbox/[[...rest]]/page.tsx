"use client"
import Sidebar from '@/components/main/Sidebar';
import React, { useState } from 'react'
import { TabType } from '../../../../../utils/types';

export default function Inbox() {
  const [tab,setTab] = useState<TabType>(TabType.INBOX);
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap absolute pt-28'>
      <Sidebar tab={tab} setTab={setTab}/>
    </main>
  )
}

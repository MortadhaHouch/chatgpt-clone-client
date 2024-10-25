"use client"
import Sidebar from '@/components/main/Sidebar';
import React, { useState } from 'react'
import { TabType } from '../../../../utils/types';

export default function Inbox() {
  const [tab,setTab] = useState<TabType>(TabType.INBOX);
  return (
    <div>
      <Sidebar tab={tab} setTab={setTab}/>
    </div>
  )
}

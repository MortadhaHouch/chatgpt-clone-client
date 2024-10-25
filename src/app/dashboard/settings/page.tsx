"use client"
import React, { useState } from 'react'
import { TabType } from '../../../../utils/types';
import Sidebar from '@/components/main/Sidebar';

export default function Settings() {
  const [tab,setTab] = useState<TabType>(TabType.SETTINGS);
  return (
    <div>
      <Sidebar tab={tab} setTab={setTab}/>
    </div>
  )
}

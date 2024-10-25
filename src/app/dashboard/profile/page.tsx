"use client"
import React, { useState } from 'react'
import { TabType } from '../../../../utils/types';
import Sidebar from '@/components/main/Sidebar';

export default function Profile() {
  const [tab,setTab] = useState<TabType>(TabType.PROFILE);
  return (
    <div>
      <Sidebar tab={tab} setTab={setTab}/>
    </div>
  )
}

"use client"
import React from 'react'
import { SidebarProvider } from '../ui/sidebar'
import { AppSidebar } from './app-sidebar'
import { TabType } from '../../../utils/types'

export default function Sidebar({
    setTab,
    tab
}:{
    setTab:React.Dispatch<React.SetStateAction<TabType>>,
    tab:TabType
}) {
    return (
        <SidebarProvider>
            <AppSidebar setTab={setTab} tab={tab}/>
        </SidebarProvider>
    )
}

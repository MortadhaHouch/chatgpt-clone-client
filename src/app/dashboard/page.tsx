"use client"
import Sidebar from '@/components/main/Sidebar'
import { useState } from 'react'
import { DashboardComponentType, TabType } from '../../../utils/types'
import { Tilt } from 'react-tilt'
import Image from 'next/image'
import Logo from "../../../assets/images/Thinking face-cuate.svg"
import { AreaChart } from '@/components/charts/AreaChart'
import CreateIcon from '@/components/icons/CreateIcon';
import DiscussionIcon from '@/components/icons/DiscussionIcon';
import Message from '@/components/icons/Message';
import WorkspaceIcon from '@/components/icons/WorspaceIcon'
import { LargeChart } from '@/components/charts/LargeChart'
import { NumberTickerComponent } from '@/components/main/NumberTicker'
const dashboardComponents:DashboardComponentType[] = [
    {
        content:"User",
        description:"",
        component:<Image src={Logo} alt='' width={150} height={150} style={{borderRadius:"50%"}}/>,
    },
    {
        content:"Create new",
        description:"",
        component:<CreateIcon/>,
    },
    {
        content:<NumberTickerComponent value={40}/>,
        description:"",
        component:<DiscussionIcon size={100}/>,
    },
    {
        content:<NumberTickerComponent value={150}/>,
        description:"",
        component:<Message size={100}/>,
    },
    {
        content:<NumberTickerComponent value={15}/>,
        description:"",
        component:<WorkspaceIcon size={100}/>,
    }
]
export default function Dashboard(){
    const [tab,setTab] = useState<TabType>(TabType.HOME);
    return (
        <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap relative'>
            <Sidebar tab={tab} setTab={setTab}/>
            <section className='flex flex-row justify-center items-center flex-wrap gap-2 p-2 absolute top-28'>
                <div className='flex flex-row justify-center items-center flex-wrap gap-2 p-2'>
                    {dashboardComponents.map((item,index)=>{
                        return (
                            <Tilt
                                key={index}
                                className="flex flex-col justify-center items-center gap-5 p-2 glass_morphism cursor-pointer" 
                                style={{
                                    borderRadius:"10px",
                                    width:"200px",
                                    height:"200px"
                                }}>
                                    {item.component}
                                <h3>{item.content}</h3>
                                {item.description.length > 0 &&(
                                    <p>{item.description}</p>
                                )}
                            </Tilt>
                        )
                    })}
                </div>
                <div className='flex flex-row justify-center items-start flex-wrap gap-2 p-2'>
                    <LargeChart/>
                    <div className='flex flex-col justify-center items-center gap-2 p-2'>
                        <AreaChart/>
                        <AreaChart/>
                    </div>
                </div>
            </section>
        </main>
    )
}
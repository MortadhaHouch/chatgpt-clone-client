"use client"
import { useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import Image from 'next/image'
import { AreaChart } from '@/components/charts/AreaChart'
import CreateIcon from '@/components/icons/CreateIcon';
import DiscussionIcon from '@/components/icons/DiscussionIcon';
import Message from '@/components/icons/Message';
import WorkspaceIcon from '@/components/icons/WorspaceIcon'
import { LargeChart } from '@/components/charts/LargeChart'
import { NumberTickerComponent } from '@/components/main/NumberTicker'
import { useTheme } from 'next-themes'
import { SignIn, useUser } from '@clerk/nextjs'
import Loader from '@/components/main/Loader'
import fetchData from '../../../../utils/fetchData'
import { DashboardComponentType, Loading } from '../../../../utils/types'
import { AppSidebar } from '@/components/main/app-sidebar'
export default function Dashboard(){
    const {user} = useUser();
    const {theme} = useTheme();
    const [loading, setLoading] = useState(false);
    async function handleDataLoading(id:string){
        try {
            const request = await fetchData("/user/preview","GET",null,id,setLoading);
            if(request.data){
                console.log(request.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if(user){
            handleDataLoading(user?.id);
        }
    }, [user]);
    if(user){
        const dashboardComponents:DashboardComponentType[] = [
            {
                content:`${user?.firstName} ${user?.lastName}`,
                description:"",
                component:<Image src={user?.imageUrl} alt='' width={150} height={150} style={{borderRadius:"50%"}}/>,
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
        return (
            <main className='w-full min-h-screen flex flex-col justify-start items-center flex-wrap relative'>
                <AppSidebar/>
                <section className='flex flex-row justify-center items-center flex-wrap gap-2 p-2 absolute pt-28 pb-10'>
                    <div className='flex flex-row justify-center items-center flex-wrap gap-2 p-2'>
                        {dashboardComponents.map((item,index)=>{
                            return (
                                <Tilt
                                    key={index}
                                    className="flex flex-col justify-center items-center gap-5 p-2 glass_morphism cursor-pointer" 
                                    style={{
                                        borderRadius:"10px",
                                        width:"200px",
                                        height:"200px",
                                        backgroundColor:theme=="dark"?"rgba(17, 25, 40, 0.75)":"rgba(255, 255, 255, 0.25)"
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
                {
                    loading && (
                        <Loader type={Loading.LOADING}/>
                    )
                }
            </main>
        )
    }else{
        return (
            <SignIn/>
        )
    }
}
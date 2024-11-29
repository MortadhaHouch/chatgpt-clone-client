"use client"
import { ChevronUp, Home, Inbox, MoreHorizontal, Settings, User2,Trash2 } from "lucide-react"
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
    Sidebar,
    SidebarContent,
    SidebarContext,
    SidebarContextType,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useTheme } from "next-themes"
import { TabType } from "../../../utils/types"
import Image from "next/image"
import {motion} from "framer-motion"
import { GoCommentDiscussion } from "react-icons/go";
import Desktop from "../icons/Desktop"
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";
import {SignOutButton, useAuth,useUser} from "@clerk/nextjs"
import { useContext } from "react";
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
        tab:TabType.HOME,
        link:"/"
    },
    {
        title: "Discussions",
        url: "#",
        icon: GoCommentDiscussion ,
        tab:TabType.DISCUSSIONS,
        link:"/discussions"
    },
    {
        title: "Workspaces",
        url: "#",
        icon: Desktop,
        tab:TabType.WORKSPACES,
        link:"/workspaces"
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
        tab:TabType.INBOX,
        link:"/inbox"
    },
    {
        title: "Profile",
        url: "#",
        icon: User2,
        tab:TabType.PROFILE,
        link:"/profile"
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
        tab:TabType.SETTINGS,
        link:"/settings"
    },
    {
        title: "Bin",
        url: "#",
        icon: Trash2,
        tab:TabType.BIN,
        link:"/bin"
    },
]
export function AppSidebar() {
    const {theme} = useTheme();
    const {isSignedIn} = useAuth();
    const {user} = useUser();
    const tabContext = useContext<SidebarContextType>(SidebarContext);
    if(isSignedIn){
        return (
            <SidebarProvider tab={tabContext.tab} setTab={tabContext.setTab}>
                <Sidebar className={`z-30 ${theme=="dark"?"bg-slate-900":"bg-slate-200"}`} collapsible="icon">
                <SidebarTrigger/>
                <SidebarContent>
                    <SidebarHeader className="flex flex-row justify-start items-center p-2 gap-2">
                        {
                            user?.hasImage?(
                                <Image src={user?.imageUrl} priority style={{borderRadius:"50%"}} width={50} height={50} alt="avatar"/>
                            ):(
                                <span style={{borderRadius:"50%"}}>{user?.firstName && user?.firstName[0]}{user?.lastName && user?.lastName[0]}</span>
                            )
                        }
                        <div className="flex flex-col justify-start items-start">
                            <h2>{user?.firstName} {user?.lastName}</h2>
                        </div>
                    </SidebarHeader>
                    <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item,index) => (
                            <SidebarMenuItem 
                                key={index} 
                                style={{
                                    backgroundColor:localStorage.getItem("tab") == item.tab?theme=="dark"?"#002d":"#EBD3F8":"",
                                    paddingLeft:localStorage.getItem("tab") == item.tab?"15px":0,
                                    borderLeft:localStorage.getItem("tab") == item.tab?"3px solid #629eff":"none",
                                    transition:"border-left .5s, padding-left .5s, background-color .5s"
                                }}
                                onClick={()=>{
                                    tabContext?.setTab(item.tab);
                                    localStorage.setItem("tab", item.tab);
                                }}
                            >
                                <SidebarMenuButton asChild>
                                <Link href={"/dashboard"+item.link} onClick={()=>{
                                    tabContext?.setTab(item.tab);
                                }}>
                                    <item.icon scale={1.1}/>
                                    <span className="text-lg">{item.title}</span>
                                </Link>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction>
                                    <MoreHorizontal />
                                    </SidebarMenuAction>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="right" align="start" style={{borderRadius:"10px"}}>
                                    <DropdownMenuItem className={`border-0 outline-0 ${theme=="dark"?"bg-blue-600":"bg-slate-200"}`}>
                                    <motion.span style={{cursor:"pointer"}} whileHover={{backgroundColor:theme=="dark"?"#433D8B":"#C8ACD6"}} transition={{duration:.25,ease:"easeInOut"}} className="block p-2">Edit Project</motion.span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className={`border-0 outline-0 ${theme=="dark"?"bg-blue-600":"bg-slate-200"}`}>
                                    <motion.span style={{cursor:"pointer"}} whileHover={{backgroundColor:theme=="dark"?"#433D8B":"#C8ACD6"}} transition={{duration:.25,ease:"easeInOut"}} className="block p-2">Delete Project</motion.span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <User2 /> {user?.firstName} {user?.lastName}
                            <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            className="w-[--radix-popper-anchor-width] gap-0"
                        >
                        <DropdownMenuItem className="p-2 border-0 outline-0">
                            <motion.span 
                                style={{
                                    cursor:"pointer",
                                    display:"flex",
                                    flexDirection:"row",
                                    justifyContent:"flex-start",
                                    alignItems:"center",
                                    gap:10
                                }} 
                                whileHover={{
                                    backgroundColor:theme=="dark"?"#433D8B":"#C8ACD6"}} 
                                transition={{
                                    duration:.25,
                                    ease:"easeInOut"
                                }} 
                                className="block p-2"
                            ><FaRegMoneyBillAlt />Billing</motion.span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="p-2 border-0 outline-0">
                            <motion.span 
                                style={{
                                    cursor:"pointer",
                                    display:"flex",
                                    flexDirection:"row",
                                    justifyContent:"flex-start",
                                    alignItems:"center",
                                    gap:10
                                }} 
                                whileHover={{
                                    backgroundColor:theme=="dark"?"#433D8B":"#C8ACD6"
                                }} 
                                transition={{
                                    duration:.25,
                                    ease:"easeInOut"
                                }} 
                                className="block p-2"
                            ><PiSignOutBold /><SignOutButton/></motion.span>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
            </SidebarProvider>
        )
    }else{
        return <></>
    }
}
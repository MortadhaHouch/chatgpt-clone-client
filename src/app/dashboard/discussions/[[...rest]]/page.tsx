"use client"
import { AppSidebar } from '@/components/main/app-sidebar';
import { Action, Discussion } from '../../../../../utils/types';
import {v4} from "uuid"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';
import CreateIcon from '@/components/icons/CreateIcon';
import { Input } from '@/components/ui/input';
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import gsap from "gsap";
import { Flip } from 'gsap/all';
import { Dialog } from '@/components/main/DialogDemo';
import { MdDelete } from 'react-icons/md';
import { MeteorDemo } from '@/components/main/MeteorDemo';
gsap.registerPlugin(Flip);
export default function Discussions() {
  const [isGrid,setIsGrid] = useState<boolean>(false)
  const discussionContainerRefs = useRef<HTMLDivElement[]>();
  const [isShown,setIsShown] = useState<boolean>(false);
  const [discussionToDelete,setDiscussionToDelete] = useState<Discussion|undefined>(undefined);
  const [action,setAction] = useState<Action>(Action.GET_DISCUSSION);
  const discussions: Discussion[] = [
    {
      id: v4(),
      name: "Frontend Features Discussion",
      createdAt: new Date("2023-09-15"),
      messages: [
        {
          from: {
            firstName: "Alice",
            lastName: "Johnson",
            email: "alice.johnson@example.com",
            avatars: "https://example.com/avatars/alice.png",
          },
          content: "What should be the priority for the next sprint?",
          createdAt: new Date("2023-09-15T10:00:00"),
          isDeleted: false,
        },
        {
          from: {
            firstName: "Bob",
            lastName: "Smith",
            email: "bob.smith@example.com",
            avatars: "https://example.com/avatars/bob.png",
          },
          content: "We should prioritize the dashboard redesign.",
          createdAt: new Date("2023-09-15T10:15:00"),
          isDeleted: false,
        },
      ],
    },
    {
      id: v4(),
      name: "Backend Architecture Review",
      createdAt: new Date("2023-09-16"),
      messages: [
        {
          from: {
            firstName: "Charlie",
            lastName: "Brown",
            email: "charlie.brown@example.com",
            avatars: "https://example.com/avatars/charlie.png",
          },
          content: "Should we consider using GraphQL for the API?",
          createdAt: new Date("2023-09-16T11:00:00"),
          isDeleted: false,
        },
        {
          from: "BOT",
          content: "The API documentation has been updated.",
          createdAt: new Date("2023-09-16T11:30:00"),
          isDeleted: false,
        },
      ],
    },
    {
      id: v4(),
      name: "Marketing Strategies Brainstorm",
      createdAt: new Date("2023-09-17"),
      messages: [
        {
          from: {
            firstName: "Diana",
            lastName: "Prince",
            email: "diana.prince@example.com",
            avatars: "https://example.com/avatars/diana.png",
          },
          content: "We should explore TikTok ads for the next campaign.",
          createdAt: new Date("2023-09-17T14:00:00"),
          isDeleted: false,
        },
        {
          from: "BOT",
          content: "Reminder: The monthly marketing meeting is scheduled for tomorrow.",
          createdAt: new Date("2023-09-17T14:30:00"),
          isDeleted: false,
        },
      ],
    },
    {
      id: v4(),
      name: "UI/UX Enhancements Discussion",
      createdAt: new Date("2023-09-18"),
      messages: [
        {
          from: {
            firstName: "Alice",
            lastName: "Johnson",
            email: "alice.johnson@example.com",
            avatars: "https://example.com/avatars/alice.png",
          },
          content: "Can we add dark mode support to the app?",
          createdAt: new Date("2023-09-18T09:00:00"),
          isDeleted: false,
        },
        {
          from: {
            firstName: "Charlie",
            lastName: "Brown",
            email: "charlie.brown@example.com",
            avatars: "https://example.com/avatars/charlie.png",
          },
          content: "Dark mode is already in progress and will be available in two sprints.",
          createdAt: new Date("2023-09-18T09:15:00"),
          isDeleted: false,
        },
      ],
    },
    {
      id: v4(),
      name: "Team Retrospective",
      createdAt: new Date("2023-09-19"),
      messages: [
        {
          from: {
            firstName: "Bob",
            lastName: "Smith",
            email: "bob.smith@example.com",
            avatars: "https://example.com/avatars/bob.png",
          },
          content: "What went well in this sprint?",
          createdAt: new Date("2023-09-19T13:00:00"),
          isDeleted: false,
        },
        {
          from: "BOT",
          content: "Please submit your feedback by EOD today.",
          createdAt: new Date("2023-09-19T13:15:00"),
          isDeleted: false,
        },
      ],
    },
  ];
  useEffect(()=>{
    if(discussionContainerRefs){
      const state = Flip.getState("flex flex-col justify-center items-center border shadow-md gap-4 p-2 rounded-md");
      if(state){
        Flip.from(state,{
          ease:"back.inOut",
          duration:".5s",
          stagger:.25
        })
      }
    }
  },[isGrid])
  return (
    <main className='w-full min-h-screen flex flex-col justify-start items-center flex-wrap relative'>
      <AppSidebar/>
      <section className='w-full flex flex-col justify-center items-center gap-2 p-2 absolute top-28 pb-10'>
        <div className='w-full h-[300px] flex flex-col justify-center items-center border shadow-md gap-2 p-2 rounded-md relative'>
          <MeteorDemo>
          <CreateIcon size={200}/>
            <Button 
              onClick={()=>{
                setIsShown(true)
                setAction(Action.CREATE_DISCUSSION);
              }}
            >Create new</Button>
          </MeteorDemo>
        </div>
        <h4>OR...</h4>
        <div className='w-full flex flex-row justify-center items-center flex-wrap border shadow-md gap-4 p-2 rounded-md'>
          <div className='sm:w-[80%] flex flex-row justify-center items-center gap-2'>
            <Input type='text'/>
            <Button 
              className='flex flex-row justify-center items-center gap-1 p-1'
              onClick={()=>{
                setIsShown(true);
                setAction(Action.GET_DISCUSSION);
              }}
            ><FaFilter size={20}/><span>Search</span></Button>
            <Button onClick={()=>setIsGrid(val=>!val)}>
              {
                isGrid? (
                  <BsFillGridFill size={20}/>
                ) : (
                  <FaList size={20}/>
                )
              }
            </Button>
          </div>
          <div className={`w-full flex ${isGrid?"flex-col":"flex-row flex-wrap"} justify-center items-center border shadow-md gap-4 p-2 rounded-md`}>
            {
              discussions.map((discussion) => (
                <div ref={r=>{
                  if(r){
                    discussionContainerRefs.current?.push(r);
                  }
                }} key={discussion.id} className={`${isGrid?"w-full":"w-[clamp(250px,25%,300px)]"} h-[200px] flex flex-col justify-center items-center border shadow-md gap-4 p-2 rounded-md relative`}>
                  <h3 className='text-lg font-medium'>{discussion.name}</h3>
                  <div className='flex flex-col justify-start items-center gap-2'>
                    <span className='w-full text-sm'>Created on {discussion.createdAt.toLocaleDateString()}</span>
                    <span className='w-full text-sm'>{discussion.messages.length} messages</span>
                    <Button className='w-full border-primary bg-transparent'>
                      <Link href={`/dashboard/discussions/${discussion.id}`} className='flex flex-row justify-center items-center w-full gap-2'><span>view</span><FaLocationArrow size={20}/></Link>
                    </Button>
                    <Button 
                      className='bg-red-500 absolute top-[10px] right-[10px]' 
                      onClick={()=>{
                      setIsShown(true)
                      setDiscussionToDelete(discussion);
                      setAction(Action.DELETE_DISCUSSION);
                    }}><MdDelete /></Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {
        isShown && action === Action.CREATE_DISCUSSION && (
          <Dialog action={Action.CREATE_DISCUSSION} setIsOpen={setIsShown} open={isShown}/>
        )
      }
      {
        discussionToDelete && action === Action.DELETE_DISCUSSION && isShown && (
          <Dialog action={Action.DELETE_DISCUSSION} setIsOpen={setIsShown} open={isShown}/>
        )
      }
      {
        action === Action.GET_DISCUSSION && isShown && (
          <Dialog action={Action.GET_DISCUSSION} setIsOpen={setIsShown} open={isShown}/>
        )
      }
    </main>
  )
}

"use client"
import Sidebar from '@/components/main/Sidebar';
import React, { useState } from 'react'
import { Loading, TabType } from '../../../../../utils/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LuSend } from "react-icons/lu";
import fetchData from '../../../../../utils/fetchData';
import Loader from '@/components/main/Loader';
export default function Discussions() {
  const [tab,setTab] = useState<TabType>(TabType.DISCUSSIONS);
  const [messages,setMessages] = useState<string[]>([]);
  const [message,setMessage] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  async function handleMessage(){
    try {
      const response = await fetchData("/message/add","POST",{
        message
      },null,setIsLoading);
      if(response && typeof(response.response) === "string"){
        console.log(JSON.parse(response.response));
        setMessages((prev)=>[...prev,response.response]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap absolute pt-28 pb-10'>
      <Sidebar tab={tab} setTab={setTab}/>
      <section className='w-[80%] h-auto flex flex-col justify-center items-center gap-2'>
        {
          messages.map((item,index)=>{
            return(
              <div key={index}>
                {
                  Object.keys(JSON.parse(item)).map((element,i)=>{
                    return(
                      <div key={i}>
                        <h2 className='text-3xl'>{element}</h2>
                        {
                          Object.values(JSON.parse(item)).map((el,idx)=>{
                            return(
                              <div key={idx}>
                                {
                                  Array.isArray(el)?(
                                    <>
                                      {
                                        <h3>{(Object.values(JSON.parse(item))[Object.values(JSON.parse(item)).indexOf(el) -1] as string)}</h3>
                                      }
                                      {
                                        el.map((e,id)=>{
                                          return(
                                            <p key={id} className='text-xl pl-5'>{id+1} ) {e as string}</p>
                                          )
                                        })
                                      }
                                    </>
                                  ):(
                                    <p className='text-xl'>{el as string}</p>
                                  )
                                }
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </section>
      <div className='w-[80%] flex flex-row justify-center items-center p-2 fixed bottom-0 backdrop-blur-md'>
        <Input type='text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <Button disabled={isLoading || message.length === 0} onClick={handleMessage}>
          {
            isLoading ?(
              <Loader type={Loading.MESSAGE_LOADING}/>
            ):(
              <LuSend size={20}/>
            )
          }
          </Button>
      </div>
    </main>
  )
}

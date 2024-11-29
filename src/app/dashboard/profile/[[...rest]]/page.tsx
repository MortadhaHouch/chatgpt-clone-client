import { AppSidebar } from "@/components/main/app-sidebar"
import {UserProfile} from "@clerk/nextjs"
export default function Profile() {
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center flex-wrap absolute pt-28'>
      <AppSidebar/>
      <UserProfile/>
    </main>
  )
}

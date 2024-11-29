"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "../ui/textarea"
import { Action } from "../../../utils/types"
import { Input } from "../ui/input"
import { ChangeEvent, useState } from "react"
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import { Label } from "../ui/label"
import { DatePickerDemo } from "./DatePicker"
import { DatePickerWithRange } from "./DatePickerWithRange"
import { MdCancel } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { DateRange } from "react-day-picker"
export function Dialog({
    open,
    setIsOpen,
    action
}:{
    open:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
    action:Action
}) {
    const [postText,setPostText] = useState("");
    const [discussionName,setDiscussionName] = useState("");
    const [date,setDate] = useState<Date|undefined>(undefined);
    const [dateRange,setDateRange] = useState<DateRange|undefined>(undefined);
    return (
        <DialogComponent open={open} onOpenChange={setIsOpen}>
            {
                action === Action.CREATE_POST && (
                    <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center gap-2">
                        <DialogHeader>
                            <DialogTitle>
                                Express yourself
                            </DialogTitle>
                        </DialogHeader>
                        <Textarea onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setPostText(e.target.value)} style={{resize:"none",width:"clamp(300px,40%,400px)",height:"clamp(300px,40%,400px)"}}/>
                        <DialogFooter>
                            <Button type="submit" className="bg-secondary flex flex-row justify-center items-center gap-1"><MdCancel size={20}/><span>Cancel</span></Button>
                            <Button type="submit" className="bg-primary flex flex-row justify-center items-center gap-1"><IoAdd size={20}/><span>Post</span></Button>
                        </DialogFooter>
                    </DialogContent>
                )
            }
            {
                action === Action.CREATE_DISCUSSION && (
                    <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center gap-2">
                        <DialogHeader>
                            <DialogTitle>
                                Enter discussion name
                            </DialogTitle>
                        </DialogHeader>
                        <Input type="text" onChange={(e:ChangeEvent<HTMLInputElement>)=>setDiscussionName(e.target.value)}/>
                        <DialogFooter>
                            <Button type="submit" className="bg-secondary flex flex-row justify-center items-center gap-1"><MdCancel size={20}/><span>Cancel</span></Button>
                            <Button type="submit" className="bg-primary flex flex-row justify-center items-center gap-1"><IoAdd size={20}/><span>Create</span></Button>
                        </DialogFooter>
                    </DialogContent>
                )
            }
            {
                action  === Action.DELETE_DISCUSSION && (
                    <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center gap-2">
                        <DialogHeader>
                            <DialogTitle>
                                Are you sure you want to delete this discussion
                            </DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                            <Button type="submit" className="bg-secondary flex flex-row justify-center items-center gap-1"><MdCancel size={20}/><span>Cancel</span></Button>
                            <Button type="submit" className="bg-red-500 flex flex-row justify-center items-center gap-1"><MdDelete size={20}/><span>Delete</span></Button>
                        </DialogFooter>
                    </DialogContent>
                )
            }
            {
                action  === Action.GET_DISCUSSION && (
                    <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center gap-2">
                        <DialogHeader>
                            <DialogTitle>
                                Search discussions
                            </DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                        <DialogContent>
                            <div className="flex flex-col justify-center items-start gap-1">
                                <Label htmlFor="by-name">Search by name</Label>
                                <Input id="by-name"/>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-1">
                                <Label htmlFor="by-date">Search from specific date</Label>
                                <DatePickerDemo date={date} setDate={setDate}/>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-1">
                                <Label htmlFor="by-date">Search by date range</Label>
                                <DatePickerWithRange className="w-full" dateRange={dateRange} setDateRange={setDateRange}/>
                            </div>
                        </DialogContent>
                            <Button type="submit" className="bg-secondary"><MdCancel size={20}/><span>Cancel</span></Button>
                            <Button type="submit" className="bg-green-500 flex flex-row justify-center items-center gap-1 bg-primary"><FaSearch size={20}/><span>Search</span></Button>
                        </DialogFooter>
                    </DialogContent>
                )
            }
        </DialogComponent>
    )
}
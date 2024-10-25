import { Button } from "@/components/ui/button"
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"

export function Dialog({
    open,
    setIsOpen
}:{
    open:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <DialogComponent open={open} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center gap-2">
                <DialogHeader>
                    <DialogTitle>
                        Express yourself
                    </DialogTitle>
                </DialogHeader>
                <Textarea style={{resize:"none",width:"clamp(300px,40%,400px)",height:"clamp(300px,40%,400px)"}}/>
                <DialogFooter>
                <Button type="submit">Post</Button>
                </DialogFooter>
            </DialogContent>
        </DialogComponent>
    )
}
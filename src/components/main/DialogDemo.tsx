import { Button } from "@/components/ui/button"
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
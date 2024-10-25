/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDroppable } from '@dnd-kit/core';

export default function KanbanDroppable({id,children}:{id:string,children:React.ReactNode}) {
    const {isOver, setNodeRef} = useDroppable({
        id,
    });
    const style = {
        opacity: isOver ? 1 : 0.5,
    };

    return (
        <div 
            ref={setNodeRef} 
            style={{
                ...style,
                width:"clamp(300px,40%,450px)",
                height:"fit-content",
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                alignItems:"center",
                borderRadius:15,
                padding:10,
                gap:10,
            }}>
            {children}
        </div>
    );
}

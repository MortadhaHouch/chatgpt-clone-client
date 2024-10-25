/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDraggable } from '@dnd-kit/core';
import React from 'react'
import {CSS} from '@dnd-kit/utilities';
export default function KanbanDraggable({id,children}:{id:string,children:React.ReactNode}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id
    });
    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };
    
    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </button>
    );
}

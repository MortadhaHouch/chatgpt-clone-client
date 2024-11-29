import { useDraggable } from "@dnd-kit/core";
import { useTheme } from "next-themes";
import React from "react";
import { Discussion } from "../../../utils/types";

export default function DraggableCard({
        item,
    }: {
        item: Discussion;
    }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: item.id,
    });
    const style: React.CSSProperties = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
    : {
    };
    const {theme} = useTheme();
    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md ${theme === "dark"?'bg-slate-800':'bg-slate-400'} w-full`}>
            <h3>{item.name}</h3>
        </div>
    );
}

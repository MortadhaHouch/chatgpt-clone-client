"use client";

import { AppSidebar } from "@/components/main/app-sidebar";
import Column from "@/components/main/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Workspace } from "../../../../../utils/types";
export default function Workspaces() {
  const workspaces: Workspace[] = [];
  const [columns, setColumns] = useState<Workspace[]>(workspaces);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log(event);
  
    if (!over || active.id === over.id) return;
  
    setColumns((prev) => {
      // Find source and destination workspaces
      const sourceWorkspace = prev.find((workspace) =>
        workspace.discussions.some((discussion) => discussion.id === active.id)
      );
      const destinationWorkspace = prev.find((workspace) => workspace.id === over.id)
      
      if (!sourceWorkspace || !destinationWorkspace) return prev;
  
      // Find and remove the dragged discussion from the source workspace
      const draggedDiscussion = sourceWorkspace.discussions.find(
        (discussion) => discussion.id === active.id
      );
  
      if (!draggedDiscussion) return prev;
  
      // Create updated workspaces
      const updatedSourceWorkspace = {
        ...sourceWorkspace,
        discussions: sourceWorkspace.discussions.filter(
          (discussion) => discussion.id !== active.id
        ),
      };
  
      const updatedDestinationWorkspace = {
        ...destinationWorkspace,
        discussions: [...destinationWorkspace.discussions, draggedDiscussion],
      };
  
      // Return new state with updated workspaces
      return prev.map((workspace) =>
        workspace.id === sourceWorkspace.id
          ? updatedSourceWorkspace
          : workspace.id === destinationWorkspace.id
          ? updatedDestinationWorkspace
          : workspace
      );
    });
  };  

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center flex-wrap relative pt-28">
      <AppSidebar />
      <section className="flex flex-row justify-center items-start gap-2 flex-wrap absolute">
        <DndContext onDragEnd={handleDragEnd}>
          {columns.map((item) => (
            <Column id={item.id} key={item.id} items={item.discussions} />
          ))}
        </DndContext>
      </section>
    </main>
  );
}

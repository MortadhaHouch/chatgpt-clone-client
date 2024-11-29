import { useDroppable } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";
import { Discussion } from "../../../utils/types";

export default function Column({
  id,
  items,
}: {
  id: string;
  items: Discussion[];
}) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <section ref={setNodeRef} className={`flex flex-col justify-start items-center gap-2 p-1 rounded-md border min-w-[300px] h-full ${isOver?"bg-blue-950":"bg-slate-500"}`}>
      <h2>{id}</h2>
      {items.map((item) => (
        <DraggableCard key={item.id} item={item} />
      ))}
    </section>
  );
}

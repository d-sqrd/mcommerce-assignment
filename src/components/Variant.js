import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Variant = ({ variant }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: variant?.id });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
      }
    : undefined;
  return (
    <div ref={setNodeRef} style={{ display: "flex", ...style }}>
      <button {...attributes} {...listeners}>
        Drag Handle
      </button>
      <h6>{variant.title}</h6>
    </div>
  );
};

export default Variant;

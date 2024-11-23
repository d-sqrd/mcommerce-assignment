import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import Variant from "./Variant";

const Variants = ({ variants }) => {
  const [isVariantsVisible, setIsVariantsVisible] = useState(true);
  const [variantsList, setVariantsList] = useState(variants);

  const handleVariantsButton = () => {
    setIsVariantsVisible((prev) => !prev);
  };

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setVariantsList((prevVariants) => {
        const filterByActiveId = (obj) => obj.id === active.id;
        const filterByOverId = (obj) => obj.id === over.id;
        const oldIndex = prevVariants.findIndex(filterByActiveId);
        const newIndex = prevVariants.findIndex(filterByOverId);
        // console.log(`oldIndex = ${oldIndex}`);
        // console.log(`newIndex = ${newIndex}`);
        return arrayMove(prevVariants, oldIndex, newIndex);
      });
    }
  }
  return (
    <div>
      {variants && variants.length > 1 ? (
        <div>
          {isVariantsVisible ? (
            <button onClick={handleVariantsButton}>Hide Variants</button>
          ) : (
            <button onClick={handleVariantsButton}>Show Variants</button>
          )}
        </div>
      ) : null}
      <div id="variants-draggable-parent-container">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToParentElement]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={variantsList}
            strategy={verticalListSortingStrategy}
          >
            {isVariantsVisible &&
              variantsList &&
              variantsList.map((variant) => {
                return <Variant key={variant.id} variant={variant} />;
              })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Variants;

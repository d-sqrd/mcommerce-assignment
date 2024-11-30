import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import Variants from "./Variants";
import ProductPicker from "./ProductPicker";

const ProductItem = ({ product }) => {
  const [isProductPickerOpen, setIsProductPickerOpen] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: product.id });
  const style = transform
    ? {
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
        transition,
      }
    : undefined;
  //   console.log(`transform = ${JSON.stringify(transform)}`);

  const handleProductPick = () => {
    setIsProductPickerOpen((prevState) => !prevState);
  };
  return (
    <div ref={setNodeRef} style={style}>
      <button {...attributes} {...listeners}>
        Drag Handle
      </button>
      <input></input>
      <button onClick={handleProductPick}>Pdt Pick</button>
      <button>Add Discount</button>
      {product.variants ? <Variants variants={product.variants} /> : null}
      {isProductPickerOpen ? (
        <ProductPicker toggleIsOpen={setIsProductPickerOpen} />
      ) : null}
    </div>
  );
};

export default ProductItem;

import React, { useRef } from "react";
import ProductItem from "./ProductItem";
import { DndContext, closestCenter, rectIntersection } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const ProductList = ({ productsList, setProductsList }) => {
  let dummyProductCount = useRef(0);

  const handleAddProduct = () => {
    // since we add the actual product data after clicking on the "Product Picker" button so to render an empty placeholder <ProductItem />, initializing the id key with dummy value -> after a product is selected by clicking on the "Product Picker" button these dummy ids will be replaced with actual id retrieved from GET Products API
    dummyProductCount.current += 1;
    // console.log(`dummyProductCount = ${JSON.stringify(dummyProductCount)}`);
    setProductsList((prev) => [
      ...prev,
      {
        id: `dummy-${dummyProductCount.current}`,
        title: "",
        variant: [],
        image: {},
      },
    ]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setProductsList((prevProducts) => {
        const filterByActiveId = (obj) => obj.id === active.id;
        const filterByOverId = (obj) => obj.id === over.id;
        const oldIndex = prevProducts.findIndex(filterByActiveId);
        const newIndex = prevProducts.findIndex(filterByOverId);
        // console.log(`oldIndex = ${oldIndex}`);
        // console.log(`newIndex = ${newIndex}`);
        return arrayMove(prevProducts, oldIndex, newIndex);
      });
    }
  };
  return (
    <div>
      <h2>Add Products</h2>
      <div id="products-draggable-parent-container">
        <DndContext
          collisionDetection={closestCenter}
          //   collisionDetection={rectIntersection}
          modifiers={[restrictToParentElement]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={productsList}
            strategy={verticalListSortingStrategy}
          >
            {productsList &&
              productsList.map((product) => {
                return (
                  <ProductItem
                    key={product ? product.id : null}
                    product={product ? product : null}
                  />
                );
              })}
          </SortableContext>
        </DndContext>
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;

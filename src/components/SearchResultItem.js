import React from "react";

const SearchResultItem = ({ product }) => {
  // console.log(`product---> ${JSON.stringify(product)}`);
  const handleParentItemClick = (e) => {
    // e.preventDefault();
    console.log(`parent item clicked--->${e.target.value}`);
    console.log(`parent item clicked--->${e.target.checked}`);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          id={product.id}
          value={product.title}
          onClick={handleParentItemClick}
        />
        <label htmlFor={product.id}>{product.title}</label>
      </div>
      <div>
        {product.variants.map((variant) => {
          return (
            <div key={variant.id}>
              <input type="checkbox" id={variant.id} />
              <label htmlFor={variant.id}>{variant.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultItem;

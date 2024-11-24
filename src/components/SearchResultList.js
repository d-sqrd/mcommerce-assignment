import React from "react";
import SearchResultItem from "./SearchResultItem";
const SearchResultList = ({ productList }) => {
  return (
    <div style={{ overflowY: "scroll" }}>
      {productList &&
        productList.map((product) => {
          return <SearchResultItem key={product.id} product={product} />;
        })}
    </div>
  );
};

export default SearchResultList;

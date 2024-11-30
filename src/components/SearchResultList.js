import React from "react";
import SearchResultItem from "./SearchResultItem";
const SearchResultList = ({ productList }) => {
  return (
    <div style={{ overflowY: "scroll", height: "100%" }}>
      {productList &&
        productList.map((product) => {
          return <SearchResultItem key={product.id} product={product} />;
        })}
    </div>
  );
};

export default SearchResultList;

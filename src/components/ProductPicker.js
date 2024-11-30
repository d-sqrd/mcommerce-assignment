import axios from "axios";
import React, { useEffect, useState } from "react";
import products from "../sampleProductsList";
import SearchResultList from "./SearchResultList";
const ProductPicker = ({ toggleIsOpen }) => {
  const URL = `${process.env.REACT_APP_BASE_URL}/search?search=Hat&page=2&limit=1`;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [selectedProductList, setSelectedProductList] = useState([]);
  const [searchedProductList, setSearchedProductList] = useState([]);
  const fetchProducts = async (url) => {
    // console.log(`url = ${url}`);
    const searchedProductsListRes = await axios({
      method: "get",
      url: url,
      headers: { "x-api-key": API_KEY },
    });
    // console.log(`res = ${JSON.stringify(searchedProductsListRes)}`);
    return searchedProductsListRes;
  };

  const handleToggle = () => {
    toggleIsOpen((prevState) => !prevState);
  };

  const handleSearchInput = (e) => {
    // console.log(`search-input = ${e.target.value}`);
    let searchInput = e.target.value;
    let url = `${process.env.REACT_APP_BASE_URL}/search?search=${searchInput}&page=2&limit=1`;
    // fetchProducts(url);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <div
        id="modal-window-parent-container"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: "101",
          transform: "translate(-50%, -50%)",
          background: "white",
          height: "60%",
          width: "70%",
          margin: "auto",
          padding: "2%",
          borderRadius: "4px",
          boxShadow: "2px solid black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontWeight: "500" }}>Select Products</p>
          <button onClick={handleToggle}>X</button>
        </div>
        <div style={{ border: "1px solid black" }}>
          <input
            style={{ width: "95%" }}
            placeholder="Search Products..."
            onChange={handleSearchInput}
          />
        </div>
        <div style={{ border: "1px solid red", height: "60%" }}>
          <SearchResultList productList={products} />
        </div>
        <div style={{ border: "1px solid black" }}>
          #Products_Selected-Cancel_Btn-Add_Btn
        </div>
      </div>
    </div>
  );
};

export default ProductPicker;

import React from "react";
import products from "../sampleProductsList";
import SearchResultList from "./SearchResultList";
const ProductPicker = ({ isOpen, toggleIsOpen }) => {
  if (!isOpen) return null;
  const handleToggle = () => {
    toggleIsOpen((prevState) => !prevState);
  };
  return (
    // <div
    //   onClick={handleToggle}
    //   style={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     background: "rgba(0, 0, 0, 0.5)",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     overflowY: "auto",
    //   }}
    // >
    <>
      {/* <div
        onClick={handleToggle}
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "auto",
        }}
      ></div> */}
      <div
        id="modal-window-parent-container"
        onClick={handleToggle}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: "101",
          transform: "translate(-50%, -50%)",
          background: "white",
          height: "300px",
          width: "240px",
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
          display: "flex",
          flexDirection: "column",
          // overflowY: "initial !important",
        }}
      >
        <div style={{ border: "1px solid red" }}>Select Products-Close_Btn</div>
        <div style={{ border: "1px solid black" }}>
          Search bar
          <input />
        </div>
        <div style={{ border: "1px solid red" }}>
          <p>Available Products List</p>
          <SearchResultList
            productList={products}
            style={{ overflowY: "scroll", height: "40%" }}
          />
        </div>
        <div style={{ border: "1px solid black" }}>
          #Products_Selected-Cancel_Btn-Add_Btn
        </div>
      </div>
    </>
  );
};

export default ProductPicker;

import React from "react";
import products from "../sampleProductsList";
const ProductPicker = ({ isOpen, toggleIsOpen }) => {
  if (!isOpen) return null;
  const handleToggle = () => {
    toggleIsOpen((prevState) => !prevState);
  };
  return (
    <div
      onClick={handleToggle}
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
      }}
    >
      <div
        id="modal-window-parent-container"
        style={{
          background: "white",
          height: 300,
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ border: "1px solid red" }}>Select Products-Close_Btn</div>
        <div style={{ border: "1px solid black" }}>
          Search bar
          <input />
        </div>
        <div style={{ border: "1px solid red" }}>Available Products List</div>
        <div style={{ border: "1px solid black" }}>
          #Products_Selected-Cancel_Btn-Add_Btn
        </div>
      </div>
    </div>
  );
};

export default ProductPicker;

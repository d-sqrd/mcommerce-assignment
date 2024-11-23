import "./App.css";
import { useState } from "react";
import products from "./sampleProductsList";
import ProductList from "./components/ProductList";
function App() {
  const [productsList, setProductsList] = useState(products); // TODO: products will come from the provided API
  return (
    <div className="App">
      <ProductList
        productsList={productsList}
        setProductsList={setProductsList}
      />
    </div>
  );
}

export default App;

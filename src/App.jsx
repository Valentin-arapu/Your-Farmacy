import { useState } from "react";
import PharmacyObjects from "./assets/Data.js";

function App() {

  const [products, setProducts] = useState(PharmacyObjects.pharmaceuticals);
  const addToCart = (id, name) => {
    console.log(`Product added to cart: ID: ${id}, Name: ${name}`);
  };
  const renderPharmaceuticalProducts = () => {
    return (
      <div>
        {products.map((product, id) => (
          <div key={id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(id, product.name)}>Add to cart</button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {renderPharmaceuticalProducts()}
    </>
  );
}

export default App;

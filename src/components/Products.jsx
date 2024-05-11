import { useState } from "react";
import PharmacyObjects from "../assets/Data.js";

function Products() {

  const [products, setProducts] = useState(PharmacyObjects.pharmaceuticals);

  const addToCart = (id, name) => {
    const product = JSON.parse(localStorage.getItem(id, name));

    if (product) {
      product.quantity += 1;
      localStorage.setItem(id, JSON.stringify(product));
    } else {
      const productToAdd = {
        id: id,
        name: name,
        quantity: 1
      };
      localStorage.setItem(id, JSON.stringify(productToAdd));
    }
  };

  const renderPharmaceuticalProducts = () => {
    return (
      <div>
        {products.map((product, id) => (
          <div key={id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(id, product.name,)}>Add to cart</button>
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

export default Products;

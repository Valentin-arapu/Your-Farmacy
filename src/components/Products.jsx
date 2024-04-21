import { useState } from "react";
import PharmacyObjects from "./Data.js";

function Products() {

  const [products, setProducts] = useState(PharmacyObjects.pharmaceuticals);

  const addToCart = (id, name, price) => {
    const existingProduct = JSON.parse(localStorage.getItem(id));

    if (existingProduct) {
      existingProduct.quantity += 1;
      localStorage.setItem(id, JSON.stringify(existingProduct));
      console.log(`The product quantity ${name} was increased by 1.`);
    } else {
      const productToAdd = {
        id: id,
        name: name,
        price: price,
        quantity: 1
      };
      localStorage.setItem(id, JSON.stringify(productToAdd));
      console.log(`The product ${name} has been added to your shopping cart.`);
    }
  };


  const renderPharmaceuticalProducts = () => {
    return (
      <div>
        {products.map((product, id) => (
          <div key={id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(id, product.name, product.price)}>Add to cart</button>
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

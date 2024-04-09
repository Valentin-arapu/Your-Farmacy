import PharmacyObjects from "./assets/Data.js";

function App() {

  const renderPharmaceuticalProducts = () => {
    return (
      <div>
        {PharmacyObjects.pharmaceuticals.map((product, id) => (
          <div key={id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to cart</button>
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

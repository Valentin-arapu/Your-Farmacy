import PharmacyObjects from "./assets/Data.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const renderPharmaceuticalProducts = () => {
  return (
    <div>
      {PharmacyObjects.pharmaceuticals.map((product, id) => (
        <div key={id} className="text-center">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <h1 className="text-center">Pharmaceutical Products:</h1>
      {renderPharmaceuticalProducts()}
    </>
  );
}


export default App;

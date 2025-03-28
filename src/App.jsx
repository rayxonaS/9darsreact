import ProductList from "./components/ProductList";
import { useFetch } from "./hooks/useFetch";
import YourCart from "./components/YourCart";

function App() {
  const {
    data: technology,
    isPending,
    error,
  } = useFetch("https://json-api.uz/api/project/products-e/products");
  return (
    <div className="container grid-container">
      {technology && (
        <ProductList technology={technology} isPending={isPending} />
      )}
      <YourCart />
    </div>
  );
}

export default App;

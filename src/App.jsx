import ProductList from "./components/ProductList";
import { useFetch } from "./hooks/useFetch";

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
    </div>
  );
}

export default App;

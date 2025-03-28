import Product from "./Product";

function ProductList({ technology, isPending }) {
  return (
    <div>
      {isPending && <h2>Loading..</h2>}
      <div className="technology-grid">
        {technology &&
          technology.data.map((t) => {
            return <Product key={t.id} t={t} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;

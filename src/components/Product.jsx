import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ t }) {
  const { dispatch, cart } = useGlobalContext();
  const { id, image, title, stock, price } = t;
  const alreadyAdded = cart.find((t) => t.id === id);
  return (
    <>
      <div className="buttons-wrapper">
        {!alreadyAdded && (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...t, amount: 1 },
              })
            }
            className="btn add-to-card-btn"
          >
            <span className="add-to-card-btn-wrapper">
              <img src="../images/icon-add-to-cart.svg" alt="" />
              <span>Add to Cart</span>
            </span>
          </button>
        )}
        {alreadyAdded && (
          <div className=" wrapper">
            <div className=" amount-wrapper">
              <button
                onClick={() => {
                  if (alreadyAdded.amount == 1) {
                    dispatch({ type: "DELETE", payload: t.id });
                  } else {
                    dispatch({ type: "DECREMENT", payload: t.id });
                  }
                }}
                className="decrement"
              >
                -
              </button>
              <h2 className="amount-title">{alreadyAdded.amount}</h2>
              <button
                onClick={() => dispatch({ type: "INCREMENT", payload: t.id })}
                className="increment"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" container technology-card-body">
        <img className="technology-card-image" src={image} alt={title} />
        <h3 className="technology-card-title">{title}</h3>
        <p className="technology-card-price">${price}</p>
        <p className="technology-card-stock">{stock}</p>
      </div>
    </>
  );
}
export default Product;

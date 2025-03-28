import { useGlobalContext } from "../hooks/useGlobalContext";

function YourCart() {
  const { cart, totalAmount, totalPrice, dispatch } = useGlobalContext();

  return (
    <div className="cart-wrapper">
      <h1 className="cart-title">Your Cart ({totalAmount})</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3 className="wrapper-title">{item.title}</h3>
          <div className="item-wrapper">
            <p className="item-amount">{item.amount}x</p>
            <p className="item-price"> @ ${item.price.toFixed(2)}</p>
            <button
              className="remove-btn"
              onClick={() => dispatch({ type: "DELETE", payload: item.id })}
            >
              <img src="./images/icon-remove-item.svg" alt="" />
            </button>
          </div>
        </div>
      ))}

      <div className="total-wrapper">
        <h2 className="total-text">Order Total </h2>
        <p className="total-price">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default YourCart;

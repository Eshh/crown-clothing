import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { removeFromCart, changeQuantity } = useContext(CartContext);

  const changeCount = (sign, e) => {
    changeQuantity(sign, e);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => changeCount("-", cartItem)}>
          &#10094;
        </div>
        &nbsp;
        <span className="value">{quantity}</span>&nbsp;
        <div className="arrow" onClick={() => changeCount("+", cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price} </span>
      <div className="remove-button" onClick={() => removeFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

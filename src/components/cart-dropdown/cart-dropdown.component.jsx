import "./cart-dropdown.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((e) => (
          <CartItem key={e.id} cartItem={e} />
        ))}
      </div>
      <Button onClick={() => navigate("/checkout")}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

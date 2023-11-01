import "./cart-dropdown.styles.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((e) => <CartItem key={e.id} cartItem={e} />)
        ) : (
          <EmptyMessage>Lonely here !</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length ? (
        <Button onClick={() => navigate("/checkout")}>CHECKOUT</Button>
      ) : (
        false
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;

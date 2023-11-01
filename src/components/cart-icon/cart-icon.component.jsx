import "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, toggleCart, cartCount } = useContext(CartContext);
  const toggleCartDropdown = () => {
    toggleCart(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

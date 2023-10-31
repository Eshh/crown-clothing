import { createContext, useEffect, useState } from "react";

const checkProduct = (cartItems, productToAdd) => {
  const isExistingCartItem = cartItems.find((e) => e.id === productToAdd.id);

  if (isExistingCartItem) {
    return cartItems.map((e) =>
      e.id === productToAdd.id ? { ...e, quantity: e.quantity + 1 } : e
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const modifyQuantity = (cartItems, sign, p) => {
  let t = JSON.parse(JSON.stringify(cartItems));
  t.forEach((e) => {
    if (p.id === e.id) sign === "+" ? e.quantity++ : e.quantity--;
  });
  t = t.filter((e) => e.quantity > 0);
  return t;
};

const deleteItem = (p, cartItems) => {
  let t = JSON.parse(JSON.stringify(cartItems));
  t = t.filter((e) => e.id !== p.id);
  return t;
};

export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => null,
  cartItems: [],
  modifyCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
  cartTotal: 0,
  setCartTotal: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, toggleCart] = useState(false);
  const [cartItems, modifyCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    let total = 0;
    cartItems.forEach((e) => (total += e.price * e.quantity));
    setCartCount(count);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product) => {
    modifyCartItems(checkProduct(cartItems, product));
  };

  const changeQuantity = (sign, e) => {
    modifyCartItems(modifyQuantity(cartItems, sign, e));
  };

  const removeFromCart = (p) => {
    modifyCartItems(deleteItem(p, cartItems));
  };
  const value = {
    isCartOpen,
    toggleCart,
    addToCart,
    cartItems,
    cartCount,
    changeQuantity,
    removeFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

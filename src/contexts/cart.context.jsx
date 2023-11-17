import { createContext, useEffect, useReducer, useState } from "react";
import { actionObject } from "../utils/reducer/reducer.utils";

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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "TOGGLE_CART_STATE":
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, toggleCart] = useState(false);
  // const [cartItems, modifyCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
  //   const count = cartItems.reduce((total, current) => {
  //     return total + current.quantity;
  //   }, 0);
  //   let total = 0;
  //   cartItems.forEach((e) => (total += e.price * e.quantity));
  //   setCartCount(count);
  //   setCartTotal(total);
  // }, [cartItems]);

  const addToCart = (product) => {
    const newCartItems = checkProduct(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const changeQuantity = (sign, e) => {
    const newCartItems = modifyQuantity(cartItems, sign, e);
    updateCartItemsReducer(newCartItems);
  };

  const removeFromCart = (p) => {
    const newCartItems = deleteItem(p, cartItems);
    updateCartItemsReducer(newCartItems);
  };

  const toggleCart = () => {
    dispatch(actionObject("TOGGLE_CART_STATE", !state.isCartOpen));
  };

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const count = newCartItems.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    let total = 0;
    newCartItems.forEach((e) => (total += e.price * e.quantity));
    dispatch(
      actionObject("SET_CART_ITEMS", {
        cartItems: newCartItems,
        cartTotal: total,
        cartCount: count,
      })
    );
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

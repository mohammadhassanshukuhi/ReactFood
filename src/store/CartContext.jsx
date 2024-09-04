import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quamtity: existingItem.quamtity + 1,
      };
      updatedItem[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.items, quamtity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedItem = [...state.items];
    if (existingItem.quamtity === 1) {
      updatedItem.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quamtity: existingItem.quamtity - 1,
      };
      updatedItem[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItem };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatCartAction] = useReducer(cartReducer, { items: [] });

  function addItems(item) {
    dispatCartAction({ type: "ADD_ITEM", item });
  }

  function removeItems(id) {
    dispatCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItems,
    removeItems,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;

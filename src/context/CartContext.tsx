import { createContext, useContext, useState } from "react";
import type { Food } from "../types/Food";
import type { CartItemData } from "../types/CartItemData";

type CartContextType = {
  cartItems: CartItemData[];

  addItem: (food: Food, quantity: number) => void;

  increaseQuantity: (foodId: number) => void;

  decreaseQuantity: (foodId: number) => void;

  removeItem: (foodId: number) => void;

  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);
  function addItem(food: Food, quantity: number) {
    if (cartItems.find((x) => x.food.id === food.id)) {
      setCartItems(
        cartItems.map((item) =>
          item.food.id === food.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { food, quantity }]);
    }
  }

  function increaseQuantity(foodId: number) {
    const updatedCartItems = cartItems.map((item) =>
      item.food.id === foodId ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartItems(updatedCartItems);
  }

  function decreaseQuantity(foodId: number) {
    const updatedCartItems = cartItems.map((item) =>
      item.food.id === foodId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCartItems(updatedCartItems);
  }

  function removeItem(foodId: number) {
    const updatedCartItems = cartItems.filter((item) => item.food.id !== foodId);
    setCartItems(updatedCartItems);
  }

  function clearCart() {
    return setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("cart must use context");
  }

  return context;
}

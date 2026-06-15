/* Cart page */

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import CartItemList from "../components/cart/CartItemList";
import CheckoutButton from "../components/cart/CheckoutButton";
import type { CartItemData } from "../types/CartItemData";
import NavigationBar from "../components/common/NavigationBar";


export default function CartPage() {
    // no cart item
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);

  // sample cart item for testing
// const [cartItems, setCartItems] = useState<CartItemData[]>([
//   {
//     food: {
//       id: 1,
//       name: "Burger",
//       description: "xxxx",
//       price: 8.99,
//       image:
//         "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
//       category: "Burger",
//     },
//     quantity: 2,
//   },
// ]);

  function increaseQuantity(foodId: number) {

    const updatedCartItems = cartItems.map((item) =>
      item.food.id === foodId 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
    );
    setCartItems(updatedCartItems);
  }

  function decreaseQuantity(foodId: number) {

    const updatedCartItems = cartItems.map((item) =>
      item.food.id === foodId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  }

  function removeItem(foodId: number) {
    // remain the items that do not match the foodId
    const updatedCartItems = cartItems.filter((item) => item.food.id !== foodId);
    setCartItems(updatedCartItems);

  }

    function clearCart() { 
        return setCartItems([]);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <CartItemList 
                cartItems={cartItems} 
                incrementQuantity={increaseQuantity} 
                decrementQuantity={decreaseQuantity} 
                removeItem={removeItem} 
            />
            <div className="mt-6 flex justify-end">
                <CheckoutButton disabled={cartItems.length === 0} />
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-orange-50">
                <NavigationBar />
            </div>
        </div>
    );
}
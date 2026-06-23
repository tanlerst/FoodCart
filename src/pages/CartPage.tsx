import CartItemList from "../components/cart/CartItemList";
import NavigationBar from "../components/common/NavigationBar";
import ClearCartButton from "../components/cart/ClearCartButton";
import { useCart } from "../context/CartContext";
import { doCheckout } from "../helpers/cart/doCheckout";
import OrderSummary from "../components/cart/OrderSummary";

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useCart();
  const subTotal = cartItems.reduce((total, item) => total + item.food.price * item.quantity, 0);

  async function handleCheckout() {
    try {
      await doCheckout(cartItems);
      clearCart();
      alert("Order placed.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="flex justify-end mb-4">
        <ClearCartButton clearCart={clearCart} />
      </div>

      <CartItemList
        cartItems={cartItems}
        incrementQuantity={increaseQuantity}
        decrementQuantity={decreaseQuantity}
        removeItem={removeItem}
      />

      <div className="mt-6">
      <OrderSummary 
        subTotal={subTotal} 
        onCheckout={handleCheckout} 
        disabled={cartItems.length === 0} 
      />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-orange-50">
        <NavigationBar />
      </div>
    </div>
  );
}

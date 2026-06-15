import CartItemList from "../components/cart/CartItemList";
import CheckoutButton from "../components/cart/CheckoutButton";
import NavigationBar from "../components/common/NavigationBar";
import ClearCartButton from "../components/cart/ClearCartButton";
import { useCart } from "../context/CartContext";

export default function CartPage() {
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

  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useCart();

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
        
        <div className="mt-6 flex justify-end">
            <CheckoutButton disabled={cartItems.length === 0} />
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-orange-50">
            <NavigationBar />
        </div>
    </div>
  );
}

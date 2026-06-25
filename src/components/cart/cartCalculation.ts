import type { CartItemData } from "../../types/CartItemData";

const SST = 0.06;

export function calculateSubtotal( cartItems: CartItemData[]) {
    return cartItems.reduce(
        (total, item) => total + item.food.price * item.quantity, 
        0
    );
}

export function calculateTotal( 
    subtotal: number
) {
    return subtotal * SST + subtotal;
}




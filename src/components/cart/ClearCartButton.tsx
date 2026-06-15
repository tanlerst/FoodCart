/* Clear cart button component on top of cart page */
import bin from "../../assets/cart/bin.png"

type clearCartButtonProps = {
    clearCart: () => void
}

export default function clearCartButton({ clearCart }: clearCartButtonProps) {
    return (
        <button 
            onClick = { clearCart }
            >
        </button>
    )
}
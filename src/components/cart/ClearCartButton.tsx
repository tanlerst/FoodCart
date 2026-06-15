/* clear cart button component in cart page to clear all items */

import bin from "../../assets/cart/bin.png";

type clearCartButtonProps = {
  clearCart: () => void;
};

export default function ClearCartButton({ clearCart }: clearCartButtonProps) {

    return (
        <button
          type="button"
          className="flex items-center gap-2 text-orange-600 font-semibold py-2 px-4 rounded-lg border border-orange-600"
          onClick={clearCart}
        >
          <img src={bin} alt="Clear Cart" className="w-5 h-5" />
          Clear Cart
        </button>
      );
}

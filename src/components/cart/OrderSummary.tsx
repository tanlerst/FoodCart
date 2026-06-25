/* order summary component under the cart page, showing the total price and checkout button */

import CheckoutButton from "./CheckoutButton";

type OrderSummaryProps = {
  subtotal: number;
  sst: number,
  total: number,
  onCheckout: () => void;
  disabled: boolean;
  showCheckoutButton: boolean;
};

export default function OrderSummary({ 
  subtotal, 
  sst,
  total,
  onCheckout, 
  disabled,
  showCheckoutButton
}: OrderSummaryProps) {
  
  let checkoutButton = null;

  if (showCheckoutButton && onCheckout) {
    checkoutButton = (
      <div className="mt-6 flex justify-end">
        <CheckoutButton onCheckout={onCheckout} disabled={disabled} />
      </div>
    );
  }

  return (

    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-xl">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>sst (6%):</span>
        <span>${sst.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-bold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {checkoutButton}
      
    </div>

  );
}


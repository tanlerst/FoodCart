/* order summary component under the cart page, showing the total price and checkout button */

import CheckoutButton from "./CheckoutButton";

type OrderSummaryProps = {
  subtotal: number;
  gst: number;
  serviceFee: number;
  total: number;
  onCheckout?: () => void; // optional
  disabled?: boolean; // optional
  showCheckoutButton: boolean;
};

export default function OrderSummary({
  subtotal,
  gst,
  serviceFee,
  total,
  onCheckout,
  disabled = false,
  showCheckoutButton,
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
        {/* Subtotal */}
        <span>Subtotal:</span>

        <span>${subtotal.toFixed(2)}</span>
      </div>

      {/* gst */}
      <div className="flex justify-between">
        <span>gst (9%):</span>

        <span>${gst.toFixed(2)}</span>
      </div>

      {/* Service Fee */}
      <div className="flex justify-between">
        <span>Service Fee (10%):</span>

        <span>${serviceFee.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-bold">
        <span>Total:</span>

        <span>${total.toFixed(2)}</span>
      </div>

      {checkoutButton}
    </div>
  );
}

/* order summary component under the cart page, showing the total price and checkout button */

import CheckoutButton from "./CheckoutButton";

type OrderSummaryProps = {
  subTotal: number;
  onCheckout: () => void;
  disabled: boolean;
};

export default function OrderSummary({ 
  subTotal, 
  onCheckout, 
  disabled 
}: OrderSummaryProps) {

  const sst = subTotal * 0.06; // 6% service fee
  const total = subTotal + sst;

    return (

      <div className="flex flex-col gap-4 p-4 rounded-lg shadow-xl">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>sst (6%):</span>
          <span>${sst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex justify-end">
          <CheckoutButton onCheckout={onCheckout} disabled={disabled} />
        </div>
        
      </div>

      
      
      

      

        

        
    );
}


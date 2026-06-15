/* Checkout button component */

type CheckoutButtonProps = {
  disabled: boolean;
};

export default function CheckoutButton({ disabled }: CheckoutButtonProps) {
  function handleCheckout() {
    alert("Checking out...");
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={disabled}
      className="w-96 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white disabled:opacity-50"
    >
      Checkout
    </button>
  );
}

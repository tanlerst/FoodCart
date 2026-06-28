/* Checkout button component */

type CheckoutButtonProps = {
  disabled: boolean;
  onCheckout: () => void;
};

export default function CheckoutButton({ disabled, onCheckout }: CheckoutButtonProps) {
  return (
    <button
      type="button"
      onClick={onCheckout}
      disabled={disabled}
      className="w-96 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white disabled:opacity-50"
    >
      Checkout
    </button>
  );
}

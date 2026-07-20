type OrderPlacedActionButtonsProps = {
  onOrderAgain: () => void;
  onBackMenu: () => void;
};

export default function OrderPlacedActionButtons({
  onOrderAgain,
  onBackMenu,
}: OrderPlacedActionButtonsProps) {
  return (
    <div className="mt-auto pt-14">
      {/* Order another surprise */}
      <button
        type="button"
        onClick={onOrderAgain}
        className="flex h-16 w-full items-center justify-center rounded-2xl bg-orange-500 text-xl font-bold text-white shadow-sm transition active:scale-[0.98]"
      >
        Order Another Surprise
      </button>

      {/* Back to menu */}
      <button
        type="button"
        onClick={onBackMenu}
        className="mt-8 w-full text-center text-xl font-semibold text-orange-500"
      >
        Back to Menu
      </button>
    </div>
  );
}
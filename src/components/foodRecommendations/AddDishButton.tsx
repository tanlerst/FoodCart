/* Food recommendation add dish button component */

type AddDishButtonProps = {
  onAddDish: () => void;
};

export default function AddDishButton({ onAddDish }: AddDishButtonProps) {
  return (
    <button
      type="button"
      onClick={onAddDish}
      className="w-40 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white"
    >
      Add Dish
    </button>
  );
}

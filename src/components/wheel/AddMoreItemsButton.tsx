/* Add more item button on wheel item list page that navigates to menu page to allow users to add item*/

import { Plus } from "lucide-react";

type AddMoreItemsButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function AddMoreItemsButton({
  onClick,
  disabled = false,
}: AddMoreItemsButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-3 font-semibold text-orange-600 disabled:border-gray-200 disabled:text-gray-400"
    >
      <Plus size={20} />
      {disabled ? "Maximum 8 Items" : "Add More Items"}
    </button>
  );
}
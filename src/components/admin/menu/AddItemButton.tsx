type AddItemButtonProps = {
  onClick: () => void;
};

export default function AddItemButton({
  onClick,
}: AddItemButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white text-sm"
        >
            + Add New Item
        </button>
    );
}
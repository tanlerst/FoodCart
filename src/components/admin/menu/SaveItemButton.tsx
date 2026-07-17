/* Save item button for add item page in admin portal */

type SaveItemButtonProps = {
  disabled?: boolean;
};

export default function SaveItemButton({ disabled = false }: SaveItemButtonProps) {
  return (
    <button
      type="submit" // use submit
      disabled={disabled}
      className="w-32 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white"
    >
      Save Item
    </button>
  );
}

/* Cancel button for adding new item in admin portal*/

type CancelButtonProps = {
  
//   onCancel: () => void;
};

// export default function CancelButton({ onCancel }: CancelButtonProps) {
export default function CancelButton() {
return (
    <button
      type="button"
    //   onClick={onCancel}
      className="w-32 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700"
    >
      Cancel
    </button>
  );
}

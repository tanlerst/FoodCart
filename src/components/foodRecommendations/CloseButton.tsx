/* Close button for food recommendation page */

type CloseButtonProps = {
  onClose: () => void;
};

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="absolute top-6 right-6 text-gray-600 text-3xl"
    >
        x
    </button>
  );
}
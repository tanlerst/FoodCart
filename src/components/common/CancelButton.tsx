import { X } from "lucide-react";

type CancelButtonProps = {
  onClick: () => void;
};

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-orange-100 text-orange-500"
    >
      <X size={20} />
    </button>
  );
}

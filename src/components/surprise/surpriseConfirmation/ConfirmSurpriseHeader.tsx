import { ArrowLeft } from "lucide-react";

type ConfirmSurpriseHeaderProps = {
  onBack: () => void;
};

export default function ConfirmSurpriseHeader({
  onBack,
}: ConfirmSurpriseHeaderProps) {
  return (
    <header className="relative flex min-h-14 items-center justify-center">
      <button
        type="button"
        onClick={onBack}
        className="absolute left-0 flex size-11 items-center justify-center rounded-full text-gray-900 active:bg-gray-100"
      >
        <ArrowLeft size={29} strokeWidth={2.3} />
      </button>

      <h1 className="px-12 text-center text-xl font-bold text-gray-950">
        Confirm Your Surprise
      </h1>
    </header>
  );
}
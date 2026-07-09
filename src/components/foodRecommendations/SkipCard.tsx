/* Food recommendation skip card in red */
import { FaLongArrowAltLeft } from "react-icons/fa";

type SkipCardProps = {
  onSkip: () => void;
};

export default function SkipCard({ onSkip }: SkipCardProps) {
  return (
    <button
      type="button"
      onClick={onSkip}
      className="flex items-center gap-2 rounded-[2rem] bg-red-100 px-8 py-3 font-semibold text-red-600"
    >
      <FaLongArrowAltLeft /> Skip
    </button>
  );
}

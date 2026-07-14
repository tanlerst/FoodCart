import { FaLongArrowAltRight } from "react-icons/fa";

type AddCardProps = {
  onAdd: () => void;
};

export default function AddCard({ onAdd }: AddCardProps) {
  return (
    <button
      type="button"
      onClick={onAdd}
      className="flex items-center gap-2 rounded-[2rem] bg-green-100 px-8 py-3 font-semibold text-green-600"
    >
      Add <FaLongArrowAltRight />
    </button>
  );
}

import { CupSoda } from "lucide-react";

type IncludeDrinksOptionProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function IncludeDrinksOption({
  checked,
  onChange,
}: IncludeDrinksOptionProps) {
  return (
    <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-2xl bg-orange-50 px-5 py-4">
      <CupSoda
        size={22}
        className="shrink-0 text-orange-600"
      />

      <span className="flex-1 text-sm font-medium text-gray-800">
        Include drinks in wheel
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={() => 1} // TODO: implement onChange
        className="h-5 w-5 cursor-pointer accent-orange-600"
      />
    </label>
  );
}
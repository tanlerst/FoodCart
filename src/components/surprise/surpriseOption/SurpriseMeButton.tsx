type SurpriseMeButtonProps = {
  onSurprise: () => void;
};

export default function SurpriseMeButton({ onSurprise }: SurpriseMeButtonProps) {
  return (
    <button
      type="button"
      onClick={onSurprise}
      className="w-100 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white"
    >
      Surprise Me
    </button>
  );
}

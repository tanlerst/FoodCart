type StartPreparingButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function StartPreparingButton({ onClick, disabled }: StartPreparingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Start Preparing
    </button>
  );
}

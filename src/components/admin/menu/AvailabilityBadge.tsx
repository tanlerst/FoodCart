type AvailabilityBadgeProps = {
  isAvailable: boolean;
  onToggle: () => void;
};

const AVAILABLE_STYLE = "bg-green-100 text-green-700 hover:bg-green-200";

const UNAVAILABLE_STYLE = "bg-red-100 text-red-600 hover:bg-red-200";

export default function AvailabilityBadge({ isAvailable, onToggle }: AvailabilityBadgeProps) {
  const nextStatus = isAvailable ? "unavailable" : "available";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isAvailable}
      aria-label={`Mark item as ${nextStatus}`}
      title={`Click to mark as ${nextStatus}`}
      className={`inline-flex min-w-24 items-center justify-center rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
        isAvailable ? AVAILABLE_STYLE : UNAVAILABLE_STYLE
      }`}
    >
      {isAvailable ? "Available" : "Unavailable"}
    </button>
  );
}

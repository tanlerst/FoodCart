type AvailabilityBadgeProps = {
  isAvailable: boolean;
};

const AVAILABLE_STYLE = "bg-green-100 text-green-700 hover:bg-green-200";
const UNAVAILABLE_STYLE = "bg-red-100 text-red-600 hover:bg-red-200";

export default function AvailabilityBadge({ isAvailable }: AvailabilityBadgeProps) {

  return (
    <button
      type="button"
      className={`inline-flex min-w-24 items-center justify-center rounded-lg px-3 py-1.5 text-xs font-semibold ${
        isAvailable ? AVAILABLE_STYLE : UNAVAILABLE_STYLE
      }`}
    >
      {isAvailable ? "Available" : "Unavailable"}
    </button>
  );
}

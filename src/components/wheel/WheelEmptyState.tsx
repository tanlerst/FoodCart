/* Wheel item page empty page */

import { CircleDashed } from "lucide-react";

type WheelEmptyStateProps = {
  onBrowseMenu: () => void;
};

export default function WheelEmptyState({
  onBrowseMenu,
}: WheelEmptyStateProps) {
  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-600">
        <CircleDashed size={32} />
      </div>

      <h2 className="mt-5 text-lg font-bold text-gray-900">
        Your wheel is empty
      </h2>

      <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
        Add at least two menu items.
      </p>

      {/* Browse Menu button */}
      <button
        type="button"
        onClick={onBrowseMenu}
        className="mt-6 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white"
      >
        Browse Menu
      </button>
    </section>
  );
}
import { SearchX } from "lucide-react";

export default function MenuEmptyState() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
        <SearchX size={24} />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-gray-800">No menu items found</h2>
    </div>
  );
}

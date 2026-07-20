import { ChevronLeft, ChevronRight } from "lucide-react";

type MenuPaginationProps = {
  currentPage: number;
  totalPages: number;
  startItem: number;
  endItem: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

export default function MenuPagination({
  currentPage,
  totalPages,
  startItem,
  endItem,
  totalItems,
  onPageChange,
}: MenuPaginationProps) {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  function handlePreviousPage() {
    if (hasPreviousPage) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Showing x to x of x items */}
      <p className="text-sm text-gray-500">
        Showing <span className="font-medium text-gray-700">{startItem}</span> to{" "}
        <span className="font-medium text-gray-700">{endItem}</span> of{" "}
        <span className="font-medium text-gray-700">{totalItems}</span> items
      </p>

      {/* Left button */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}
          aria-label="previous page"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:bg-orange-50 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page of x of x */}
        <span className="min-w-24 text-center text-sm font-medium text-gray-600">
          Page {currentPage} of {Math.max(totalPages, 1)}
        </span>

        {/* Right button */}
        <button
          type="button"
          onClick={handleNextPage}
          disabled={!hasNextPage}
          aria-label="next page"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:bg-orange-50 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

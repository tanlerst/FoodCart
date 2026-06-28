/* Search bar component for the menu page */

type AdminOrderSearchBarProps = {
  searchWord: string;
  setSearchWord: (searchWord: string) => void;
};

export default function AdminOrderSearchBar({
  searchWord,
  setSearchWord,
}: AdminOrderSearchBarProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchWord}
        onChange={handleSearch}
        placeholder="Search by Order ID, Customer, or Status..."
        className="w-full border border-gray-300 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
    </div>
  );
}

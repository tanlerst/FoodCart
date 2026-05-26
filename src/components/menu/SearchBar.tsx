/* Search bar component for the menu page */

import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for food..."
        className="w-full border border-gray-300 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
    </div>
  );
}

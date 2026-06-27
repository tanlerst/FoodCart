/* Information card under admin new item page */

export default function InformationCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Item Information</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Item Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Item Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Cheese Pizza"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          ></input>
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
            <span className="text-red-500">*</span>
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500">
            {/* Hard coded categories here */}
            <option>Select Category</option>
            <option>Main Dish</option>
            <option>Drink</option>
            <option>Dessert</option>
          </select>
        </div>

        {/* Short desc */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Short Description
            <span className="text-gray-400"> (Optional)</span>
          </label>
          <input
            type="text"
            placeholder="A short description of the item (Optional)"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          ></input>
        </div>
      </div>
    </div>
  );
}

/* Pricing card under admin new item page */

export default function PricingCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Pricing & Availability</h2>

      <div className="grid grid-cols-3 gap-6">
        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Price
            <span className="text-red-500">*</span>
          </label>

          <div className="flex rounded-xl border border-gray-300">
            <span className="border-r border-gray-300 px-4 py-3 text-gray-600">$</span>
            <input
              type="number" // stepper
              placeholder="0.00"
              className="w-full rounded-r-xl px-4 py-3 outline-none"
            ></input>
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Availability
            <span className="text-red-500">*</span>
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500">
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>
    </div>
  );
}

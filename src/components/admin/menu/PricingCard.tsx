/* Pricing card under admin new item page */

type PricingProps = {
  price: string;
  onPriceChange: (value: string) => void;
  availability: string;
  onAvailabilityChange: (value: string) => void;
  recommended: boolean;
  onRecommendedChange: (value: boolean) => void;
};

const RECOMMENDATION_ACTIVE_STYLE = "bg-orange-50 text-orange-600";
const RECOMMEDATION_INACTIVE_STYLE = "bg-white text-gray-500 hover:bg-gray-50";

export default function PricingCard({ 
  price, 
  onPriceChange,
  recommended,
  availability,
  onAvailabilityChange,
  onRecommendedChange,
 }: PricingProps) {
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
              step="0.01"
              value={price}
              placeholder="0.00"
              onChange={(x) => onPriceChange(x.target.value)}
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

          <select 
            value={availability}
            onChange={(x) => onAvailabilityChange(x.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500">
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>

        {/* Recommended */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-gray-700">
            Recommended
            <span className="text-red-500">*</span>
            {/* <span
              title="Recommended items may be highlighted to customers on the menu"
              className="flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-gray-400 text-[10px] text-gray-400"
            >
              i
            </span> */}
          </label>
          <div className="flex overflow-hidden rounded-xl border border-gray-300">
            {/* Recommend */}
            <button
              type="button"
              onClick={() => onRecommendedChange(true)}
              className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition ${
                recommended
                  ? RECOMMENDATION_ACTIVE_STYLE
                  : RECOMMEDATION_INACTIVE_STYLE
              }`}
            >
              <span>{recommended ? "★" : "☆"}</span>
              Recommended
            </button>
            
            {/* Not recommended */}
            <button
              type="button"
              onClick={() => onRecommendedChange(false)}
              className={`flex flex-1 items-center justify-center gap-2 border-l border-gray-300 px-4 py-3 text-sm font-medium transition ${
                !recommended
                  ? RECOMMENDATION_ACTIVE_STYLE
                  : RECOMMEDATION_INACTIVE_STYLE
              }`}
            >
              <span>{!recommended ? "★" : "☆"}</span>
              Not Recommended
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

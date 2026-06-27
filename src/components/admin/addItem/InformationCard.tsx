/* Information card under admin new item page */
import type { CategoryOption } from "../../../helpers/admin/getCategories";

type InformationCardProps = {
  name: string;
  description: string;
  categoryId: string;
  categories: CategoryOption[];
  loadingCategories: boolean;
  time: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTimeChange: (value: string) => void;
};

export default function InformationCard({
  name,
  description,
  categoryId,
  categories,
  loadingCategories,
  time,
  onNameChange,
  onDescriptionChange,
  onCategoryChange,
  onTimeChange,
}: InformationCardProps) {
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
            value={name}
            onChange={(x) => onNameChange(x.target.value)}
            placeholder="e.g. Cheese Pizza"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
            <span className="text-red-500">*</span>
          </label>
          <select
            value={categoryId}
            onChange={(x) => onCategoryChange(x.target.value)}
            disabled={loadingCategories}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          >
            <option value="">
              {loadingCategories ? "Loading categories..." : "Select Category"}
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
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
            value={description}
            onChange={(x) => onDescriptionChange(x.target.value)}
            placeholder="A short description of the item (Optional)"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Estimated Preparation Time (in minutes)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={time}
            onChange={(x) => onTimeChange(x.target.value)}
            placeholder="e.g. 5"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

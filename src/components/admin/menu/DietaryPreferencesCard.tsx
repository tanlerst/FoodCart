/* Dietary preferences card for admin new item page and item edit page */

const DIETARY_PREFERENCES_ACTIVE_STYLE = "border-orange-400 bg-orange-50 text-orange-600";
const DIETARY_PREFERENCES_INACTIVE_STYLE = "border-gray-300 bg-white text-gray-700 hover:bg-gray-50";

const DIETARY_OPTIONS = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "gluten-free", label: "Gluten-Free" },
  { value: "dairy-free", label: "Dairy-Free" },
  { value: "nut-free", label: "Nut-Free" },
];

type DietaryPreferencesProps = {
  selected: string[];
  onChange: (value: string[]) => void;
};

export default function DietaryPreferencesCard({ selected, onChange }: DietaryPreferencesProps) {
  const isNoneSelected = selected.length === 0;

  function toggleOption(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  function selectNone() {
    onChange([]);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Dietary Preferences</h2>
      <p className="mb-6 text-sm text-gray-500">Select all that apply</p>

      <div className="grid grid-cols-3 gap-4">
        {/* None button */}
        <button
          type="button"
          onClick={selectNone}
          className={`rounded-xl border px-4 py-3 text-center text-sm font-medium transition ${
            isNoneSelected ? DIETARY_PREFERENCES_ACTIVE_STYLE : DIETARY_PREFERENCES_INACTIVE_STYLE
          }`}
        >
          None
        </button>
        
        {/* Other dietary options */}
        {DIETARY_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => toggleOption(option.value)}
            className={`rounded-xl border px-4 py-3 text-center text-sm font-medium transition ${
              selected.includes(option.value) ? DIETARY_PREFERENCES_ACTIVE_STYLE : DIETARY_PREFERENCES_INACTIVE_STYLE
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
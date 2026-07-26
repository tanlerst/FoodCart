import { readRestrictions } from "../../../helpers/surprise/readRestrictions";
import type { RestrictionRow } from "../../../helpers/surprise/readRestrictions";
import { useEffect, useState } from "react";

const DIETARY_PREFERENCES_ACTIVE_STYLE = "border-orange-400 bg-orange-50 text-orange-600";
const DIETARY_PREFERENCES_INACTIVE_STYLE =
  "border-gray-300 bg-white text-gray-700 hover:bg-gray-50";

type DietaryPreferencesProps = {
  selected: number[];
  onChange: (value: number[]) => void;
};

export default function DietaryPreferencesCard({ selected, onChange }: DietaryPreferencesProps) {
  const [dietary, setDietary] = useState<RestrictionRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const isNoneSelected = selected.length === 0;
  useEffect(() => {
    async function loadDietary() {
      try {
        const data = await readRestrictions();
        setDietary(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load dietary preferences.");
      } finally {
        setLoading(false);
      }
    }
    loadDietary();
  }, []);

  function toggleOption(value: number) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  function selectNone() {
    onChange([]);
  }

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
        {dietary.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => toggleOption(option.id)}
            className={`rounded-xl border px-4 py-3 text-center text-sm font-medium transition ${
              selected.includes(option.id)
                ? DIETARY_PREFERENCES_ACTIVE_STYLE
                : DIETARY_PREFERENCES_INACTIVE_STYLE
            }`}
          >
            {option.restriction}
          </button>
        ))}
      </div>
    </div>
  );
}

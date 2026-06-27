/* Filter component template */

type FilterOptionProps = {
  value: string;
  label: string;
};

type FilterSelectOptionProps = {
  options: FilterOptionProps[]; // array of filter options
  value: string; // selected value
  onChange: (value: string) => void;
};

export default function FilterSelect({ options, value, onChange }: FilterSelectOptionProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-600"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

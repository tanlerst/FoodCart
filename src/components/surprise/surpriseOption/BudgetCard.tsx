type BudgetCardProps = {
  budget: number;
  minBudget: number;
  maxBudget: number;
  setBudget: (budget: number) => void;
};

export default function BudgetCard({ budget, minBudget, maxBudget, setBudget }: BudgetCardProps) {

  function handleBudgetChange(value: number) {
    if (value < minBudget) {
      setBudget(minBudget);
      return;
    }

    if (value > maxBudget) {
      setBudget(maxBudget);
      return;
    }
  setBudget(value);
}

  return (
    <section>
      <div className="mt-4"></div>
      <h2 className="text-lg font-bold mb-1">Budget per person</h2>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="mb-4 text-center text-sm font-bold text-orange-500">Up to ${budget}</p>

        <input
          type="range"
          min={minBudget}
          max={maxBudget}
          step="1"
          value={budget}
          onChange={(event) => handleBudgetChange(Number(event.target.value))}
          className="w-full accent-orange-500"
        />

        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">Min: ${minBudget}</span>
          <span className="text-gray-500 text-sm">Max: ${maxBudget}</span>
        </div>

        <div className="flex mt-4 w-full border border-gray-300 rounded-lg">
          <span className="border-r border-gray-200 px-4 py-3 text-gray-800">$</span>

          <input
            type="number"
            min={minBudget}
            max={maxBudget}
            value={budget}
            onChange={(event) => handleBudgetChange(Number(event.target.value))}
            className="w-full border-none px-4 py-1 outline-none accent-orange-500"
          />
        </div>
      </div>
    </section>
  );
}

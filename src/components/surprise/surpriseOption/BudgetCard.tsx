/**
 *  @file BudgetCard.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This file is the budget card component for the surprise option page. 
 *                It displays a card with the budget slider for the user to select their budget.
 */

type BudgetCardProps = {
    budget: number;
    setBudget: (budget: number) => void;
}

export default function BudgetCard({ budget, setBudget }: BudgetCardProps) {

    const MIN_BUDGET = 10; // to be updated
    const MAX_BUDGET = 100;

    return (
        <section>
            <div className="mt-4">

            </div>
            <h2 className="text-lg font-bold mb-1">Budget per person</h2>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="mb-4 text-center text-sm font-bold text-orange-500">
                    Up to ${budget}
                </p>

                <input
                    type="range"
                    min={MIN_BUDGET}
                    max={MAX_BUDGET}
                    step="1"
                    value={budget}
                    onChange={(event) => setBudget(Number(event.target.value))}
                    className="w-full accent-orange-500"
                />

                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Min: ${MIN_BUDGET}</span>
                    <span className="text-gray-500 text-sm">Max: ${MAX_BUDGET}</span>
                </div>

                <div className="flex mt-4 w-full border border-gray-300 rounded-lg">
                    <span className="border-r border-gray-200 px-4 py-3 text-gray-800">
                        $
                    </span>

                    <input
                        type="number"
                        min={MIN_BUDGET}
                        max={MAX_BUDGET}
                        value={budget}
                        className="w-full border-none px-4 py-1 outline-none accent-orange-500"
                    />
                </div>
            </div>
            
        </section>
    );
}